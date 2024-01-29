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
  readAndAppend(newNote, "./db/db.json");
});

// router.delete('/notes/id',(req, res)=>{
//   database
//   .deleteNotes()
//   .then(notes) => {
//     return res.json
//   }
// // fs.deleteFile("./db/db.json","utf-8",(err,data)=>{
//     if (notes) { notes = find, id
//         console.log();

//     }
//     console.log();
//     let notes = JSON.parse()
//     console.log();
//     res.json()
// })
// })

module.exports = router;

// router.post("/notes", (req, res) => {
//   fs.receiveFile(newNote, "./db/db.json", "utf-8", (err, data) => {
//     // const {title,text} = req.body
//     if (title && text) {
//       (newNotes = title), text, console.log(err);
//     }
//     console.log(data);
//     let newNotes = JSON.parse(success);
//     console.log(newNotes);
//     res.json(newNotes);
//   });
// })
