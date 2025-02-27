import express from 'express';
const app = express();

app.use(express.json());   

const users = []

// METHOD => GET, POST, PUT, DELETE
// NAME => / - sempre no plural
// Callback functions => Onde executamos o backend (Lógica de negócio)

app.post('/users', (req, res) => {
    res.send('Hello World')
    const body = req.body
    users.push(body)
    res.status(201).send("Usuário criado com sucesso")
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});