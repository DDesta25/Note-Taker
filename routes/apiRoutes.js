const router = require('express').Router()
const fs = require('fs')
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
