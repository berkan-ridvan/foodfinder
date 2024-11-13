import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import mysql from 'mysql'

const app = new Hono()

app.get('/', (c) => {
    console.log("whats good")
    return c.json({"a": "b"},200,{"Access-Control-Allow-Origin": "*"})
})

serve({
  fetch: app.fetch,
  port: 8787,
})

console.log("Server running on http://localhost:8787")