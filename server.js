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
        res.render('index', { loader: false, error: true });
    }else{
        res.send('<Script>alert("Wrong key!"); window.history.back();</Script>')
        res.render('index', { loader: false, error: true });
    }
})

app.listen(3000)  