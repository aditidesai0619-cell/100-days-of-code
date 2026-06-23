const express = require('express');
const app = express();

app.use(express.json());

let notes = [
    { id: 1, content: "This is the first note", important: true },
    { id: 2, content: "This is the second note", important: false },
];

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.post('/notes', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    text: req.body.text
  }
  notes.push(newNote)
  res.json(newNote)
})

app.put('/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(n => n.id === id)

  if (!note) {
    return res.status(404).json({ error: "Note not found" })
  }

  note.content = req.body.content
  res.json(note)
})

app.delete('/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(n => n.id !== id)
  res.json({ message: `Note ${id} deleted` })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});