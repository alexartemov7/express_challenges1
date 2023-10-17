import express from "express";
import { addStudent } from "./src/students.js";
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/lorem', (req, res) => {
    res.send('lorem ipsum...')
})

app.get('/user/:name', (req, res) => {
    const name = req.params
    res.send(`welcome back, ${name.name}`)
})

app.post('/students/', (req, res) => {
    const name = req.body
    res.send(`created new student named ${name.name}`)
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})