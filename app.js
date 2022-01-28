const express = require('express');
const mongooose = require('mongoose');

const app = express();

mongooose.connect('mongodb://localhost:27017/ToDoList', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require('./routes/index.js'));
app.use(require('./routes/todo'));

app.listen(3000, () => {
    console.log("Server listening on port: 3000");
});