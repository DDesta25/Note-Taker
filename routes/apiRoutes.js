const router = require("express").Router();
const fs = require("fs");
// const { title } = require("process");
const { readFromFile, readAndAppend, deleteFromFile } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");
const { response } = require("express");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
  console.log(req.body); //data
  //create the new note from the request pay load
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  // get the current notes and add the new one to them
  readAndAppend(newNote, "./db/db.json");
  res.json("works!");
});

// fetch(`/api/notes/${id}`, {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// router.delete("/notes", (req, res) => {
//   deleteFromFile("./db/db.json", noteId).then((data) =>
//     res.json(JSON.parse(data))
//   );
// });

router.delete('/notes/:id', (req, res) => {
  let id = req.params.id;
  if (id) {
    deleteFromFile("./db/db.json", id);
    res.status(200).send("HOORAA");
  } else {
    res.status(400).json("BOOOOOO");
  }
});

module.exports = router;
