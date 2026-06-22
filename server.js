const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send("Hello Aditi! Your server is running!")
})

app.get('/about', (req, res) => {
  res.send("I am Aditi, an AI and Creative Tech builder!")
})

app.get('/projects', (req, res) => {
  res.json({
    projects: [
      { name: "Driftspace", tech: "Next.js + Three.js + AI" },
      { name: "Repora", tech: "React + Cohere API" },
      { name: "CR Portal", tech: "Next.js + Supabase" }
    ]
  })
})

app.listen(3000)
console.log("Server running on http://localhost:3000")