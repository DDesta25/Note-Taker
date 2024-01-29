const router = require("express").Router();
const fs = require("fs");
const { title } = require("process");
const database = require("../db/db.json");
const { response } = require("express");
router.get("/notes", (req, res) => {
  database
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("./notes", (req, res) => {
    const newNote = {title,text}
  const database = require.body
  .saveNotes();
  then((notes) => {
    return res.json('Error');
  });
});

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
// });
router.delete('/notes/id',(req, res)=>{
fs.deleteFile("./db/db.json","utf-8",(err,data)=>{
    if (notes) { notes = find, id
        console.log();

    }
    console.log();
    let notes = JSON.parse()
    console.log();
    res.json()
})
})

module.exports = router;
