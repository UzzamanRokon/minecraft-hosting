const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to create Minecraft server
app.post('/create-server', (req, res) => {
    const username = req.body.username;
    // Here you would trigger Minecraft server creation
    res.send(`Creating Minecraft server for ${username}`);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
