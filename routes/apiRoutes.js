const router = require("express").Router();
const fs = require("fs");
const { title } = require("process");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
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
  };
  // get the current notes and add the new one to them
  readAndAppend(newNote, "./db/db.json")
   res.json('works!');
});


module.exports = router;

