import mysql from 'mysql'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server'

// Constants
const app = new Hono()

const establishmentsConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "establishments"
});

// Variables
let estabs = [];

// Accepts 2 strings as a paramater, returns a boolean
function attemptLogin(user, pass) {
  return new Promise((resolve, reject) => {
    let userData = undefined
    establishmentsConnection.query(
      `SELECT username, password FROM account WHERE userName = ? and password = ?`,
      [user, pass],
      function(err, result) {
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

        const data = result[0];
        if (data.username == user && data.password == pass) {
          userData = data;
        }

        resolve(userData);
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
          description: "some basic description",
          restaurant: "some restaurant",
          distance: `${e.distance} km`,
          price: e.priceRange,
          details: "this is a more detailed description than the previous",
          category: e.category,
        }
      }
    }
  )

});

app.use('/*', cors())
/*
    Takes the input from the Login page and validates the user
    EXAMPLE
    Username: exampleUsername
    Password: somePassword
*/
app.post('/posts/loginUser', async (c) => {
    const body = await c.req.json()
    let result = await attemptLogin(body.user, body.pass)
    if (result != null) {
      return c.json({result: true, loginId: body.user})
    } else {
      return c.json({result: false})
    }
  }
)

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