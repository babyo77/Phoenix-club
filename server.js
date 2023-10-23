const express = require('express')
const path = require('path')
const env = require('dotenv').config()
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (rer, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    if (`${req.body.key}` == process.env.key) {
        res.redirect("https://t.me/+inYyV-30DW02ZTBl")
    }else{
        res.status(400).send('<script>alert("Wrong Key!"); window.history.back();</script>');
    }
})

app.listen(3000)  