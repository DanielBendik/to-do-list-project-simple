import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const toDoList = [];
const toDoListWork = [];

app.post('/addToDo', (req, res) => {
  const newToDo = req.body.toDoItem;
  toDoList.push(newToDo);
  res.redirect('/'); // Redirect to the main page after adding a to do
});

app.post('/addToDoWork', (req, res) => {
  const newToDo = req.body.toDoItem;
  toDoListWork.push(newToDo);
  res.redirect('/work'); // Redirect to the work page after adding a to do
});

app.get("/", (req, res) => {
  res.render("index.ejs", { toDoList });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { toDoListWork });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});