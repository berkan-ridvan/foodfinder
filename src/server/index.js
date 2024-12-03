import mysql from 'mysql'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server'

const app = new Hono()
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "AccountInformation"
});

// Accepts 2 strings as a paramater, returns a boolean
function attemptLogin(user, pass) {
  return new Promise((resolve, reject) => {
    let userData = undefined
    con.query(
      `SELECT username, password FROM information WHERE username = ? and password = ?`,
      [user, pass],
      function(err, result) {
        if (err) {
          console.log("got nothing")
          reject(err);
          return;
        }

        console.log(result)
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

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');
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
app.get('/main', (c) => {
  if (!debounce) {
    // Debounce for 2 seconds (measured in ms)
    debounce = true
    setTimeout(() => {
      debounce = false
    },  2000)

    // Fetch data and return to client
    return c.json({result: true})
  }
  return c.json({result: false})
})

serve({
  fetch: app.fetch,
  port: 8787,
}, (info) => {
  console.log(`Listening on http://localhost:${info.port}`)
});