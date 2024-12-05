import mysql from 'mysql'
import bcrypt from 'bcrypt'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server'

// Constants
const app = new Hono()
const sqlInjectionPatterns = [
    /(\b(select|union|insert|drop|delete|update|alter|create|exec|truncate|declare|commit)\b)/i, // SQL keywords
    /(\b(or|and)\s+[0-9]+\s*=\s*[0-9]+\b)/i,  // Logical injection (e.g., ' OR 1=1 --)
    /(\b--\s*|\b#\s*|\b;\s*|\b'\s*--)/i, // Commenting tricks or semicolons
    /(\b(\w+)\s*=\s*['"]?\w+['"]?;?)/i, // Query termination or additional queries
    /\b(union|select)\b.*\bfrom\b.*\b--/i, // UNION SELECT technique
    /(\b(select|union|insert|drop|delete)\s+.*\s*from\s+\w+\b)/i, // Selecting data from a table
];
const saltRounds = 10;

const establishmentsConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "establishments"
});

// Variables
let estabs = [];

function isSQLInjectionAttempt(input) {
  // Check the input for any of the patterns
  for (let pattern of sqlInjectionPatterns) {
      if (pattern.test(input)) {
          return true; // SQL Injection detected
      }
  }

  return false; // No SQL Injection detected
}

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
  }
}

async function verifyPassword(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error("Error comparing password:", error);
  }
}

// Accepts 2 strings as a paramater, returns a boolean
function attemptLogin(user, pass) {
  return new Promise((resolve, reject) => {
    let userData = undefined
    establishmentsConnection.query(
      `SELECT username, password, accNumber FROM account WHERE userName = ?`,
      [user],
      async function(err, result) {
        if (err) {
          console.log("got nothing")
          reject(err);
          return;
        }
        
        if (result.length == 0) {
          console.log("No matching user found");
          resolve(null);
          return;
        }

        for (let i = 0; i < result.length; i++) {
          let data = result[i];
          let passwordsMatch = await verifyPassword(data.password, pass);
          if (data.username == user && passwordsMatch) {
            userData = {accNumber: data.accNumber};
          }
        }

        resolve(userData);
      }
    )
  })
}

function postReview(id, acc, comment, rating) {
  establishmentsConnection.query(
    `INSERT INTO review(id, accNumber, ratings, comments) VALUES
    (?, ?, ?, ?)`,
    [id, acc, rating, comment]
  )
}

function getReviewsForEstablishment(name) {
  return new Promise((resolve, reject) => {
    establishmentsConnection.query(
      `SELECT userName, ratings, comments
       FROM review, account
       WHERE review.id = (
	      SELECT location.id
        FROM establishment, location
        WHERE establishment.cert = location.cert and establishment.name = ?
      ) AND review.accNumber = account.accNumber`,
      [name],
      function (err, result) {
        if (err) {
          reject(err);
          return;
        }

        if (result.length == 0) {
          resolve(null);
          return;
        }

        let results = [];
        for (let i = 0; i < result.length; i++) {
          let r = result[i];
          results[i] = {
            username: r.userName,
            rating: r.ratings,
            comment: r.comments,
          }
        }

        resolve(results);
      }
    )
  })
}

establishmentsConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the Establishments Database!")
  establishmentsConnection.query(
    'SELECT name, category, id, address, distance, hours, menu, priceRange FROM establishment, location WHERE establishment.cert = location.cert',
    function(err, result) {
      if (err) {
        console.log("got nothing")
        return;
      }

      // console.log(result)
      if (result.length == 0) {
        console.log("No matching user found");
        return;
      }

      for (let i = 0; i < result.length; i++) {
        let e = result[i];
        estabs[i] = {
          id: e.id,
          title: e.name,
          hours: e.hours,
          address: e.address,
          price: e.priceRange,
          category: e.category,
          distance: `${e.distance} km`,
          restaurant: "some restaurant",
          description: "some basic description",
          details: "this is a more detailed description than the previous",
        }
      }
    }
  )

});

app.use('/*', cors())

app.post('/posts/loginUser', async (c) => {
    const body = await c.req.json();
    // Check for SQL Injection
    if (isSQLInjectionAttempt(body.user) || isSQLInjectionAttempt(body.pass)) {
      return c.json({result: false});
    }

    let hashedPassword = await hashPassword(body.pass);
    // let isPasswordCorrect = await verifyPassword(body.pass, hashedPassword);
    // console.log(isPasswordCorrect);

    let result = await attemptLogin(body.user, hashedPassword)
    if (result != null) {
      return c.json({result: true, user: body.user, accNumber: result.accNumber})
    } else {
      return c.json({result: false})
    }
  }
)

app.post('/api/postReview', async (a) => {
  const body = await a.req.json();
  // Check for SQL Injection
  if (isSQLInjectionAttempt(body.id) || isSQLInjectionAttempt(body.acc) || isSQLInjectionAttempt(body.comment) || isSQLInjectionAttempt(body.rating)) {
    return c.json({result: false});
  }
  
  postReview(body.id, body.acc, body.comment, body.rating);
  return a.json({result: true});
})

app.post('/api/getReviews', async (e) => {
  const body = await e.req.json();
  let results = await getReviewsForEstablishment(body.title);
  if (results != null) {
    return e.json({result: true, reviews: results});
  } else {
    return e.json({result: false});
  }
})

// Grabs the menus for the users when they hit the landing page
let debounce = false
app.get('/api/getEstablishments', (c) => {
  if (!debounce) {
    // Debounce for 2 seconds (measured in ms)
    debounce = true
    setTimeout(() => {
      debounce = false
    },  2000)

    // Return our establishment data to the client
    return c.json({result: true, establishments: estabs})
  }
  return c.json({result: false})
})

serve({
  fetch: app.fetch,
  port: 8787,
}, (info) => {
  console.log(`Listening on http://localhost:${info.port}`)
});