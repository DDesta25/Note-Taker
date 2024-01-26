const router = require('express').Router()
const fs = require('fs');
const { title } = require('process');
router.get('/notes',(req, res)=>{
fs.readFile("./db/db.json","utf-8",(err,data)=>{
    if (err) {
        console.log(err);
        
    }
    console.log(data);
    let notes = JSON.parse(data)
    console.log(notes);
    res.json(notes)
})
})


router.post('/notes',(req, res)=>{
fs.receiveFile(newNote, "./db/db.json","utf-8",(success,newNote)=>{
    // const {title,text} = req.body
    if (title && text) { newNotes=title,text, 
        console.log(newNote);
        
    }
    console.log(success);
    let newNotes = JSON.parse(success)
    console.log(newNotes);
    res.json(newNotes)
})
})
// router.get('/notes',(req, res)=>{
// fs.readFile("./db/db.json","utf-8",(err,data)=>{
//     if (err) {
//         console.log(err);
        
//     }
//     console.log(data);
//     let notes = JSON.parse(data)
//     console.log(notes);
//     res.json(notes)
// })
// })



module.exports = router
