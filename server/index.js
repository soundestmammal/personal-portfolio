const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is my portfolio rootpage");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server listening")
});