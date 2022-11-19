const express = require('express')
const fs = require('fs')

const app = express() //premennej app sme dali properties a methods, ktore od teraz mozme pouzivat
app.listen(3000)
console.log('SERVER: Server started')


app.use(express.json())
app.use(express.static('public')) //POUZITIE STATIC FILES, kt. sa nachadzaju vo foldri 'public'


//Pre renderovanie HTML je potrebne toto:
const path = require('path')
const viewPath = path.join(__dirname, 'view')
app.set('view engine', 'ejs')
app.set('views', viewPath)

//Toto sa vyvola ak niekto nacita stranku teda localhost
app.get('/', (req, res) => {
    console.log(req.ip + ' connected to the server')
    //res.render('index') //Renderujeme index.ejs
    res.send()
})

//Post routuje HTTP POST request


// REQUEST MAIN API
app.post('/api', (req, res) => {
    fs.writeFile('data.db', JSON.stringify(req.body), (err) => {
        if (err) throw err
        res.end() // res.end() is mandatory to stop request ! otherwise its gonna stay in pending status
    })
})

app.get('/api', (req, res) => { //na localhost:3000/api mam ulozene toto API
        fs.readFile('data.db', 'utf8', (err, data) => {
        if (err) return console.log(err)
        res.send(data)
    })
})

// REQUEST DAY SHIFTLEADER ARRAY
app.post('/dslarray', (req, res) => {
    fs.writeFile('data2.db', JSON.stringify(req.body), (err) => {
        if (err) throw err
        res.end() // res.end() is mandatory to stop request ! otherwise its gonna stay in pending status
    })
})

app.get('/dslarray', (req, res) => {
    fs.readFile('data2.db', 'utf8', (err, data) => {
    if (err) return console.log(err)
    res.send(data)
})
})

// REQUEST NIGHT SHIFTLEADER ARRAY

app.post('/nslarray', (req, res) => {
    fs.writeFile('data3.db', JSON.stringify(req.body), (err) => {
        if (err) throw err
        res.end() // res.end() is mandatory to stop request ! otherwise its gonna stay in pending status
    })
})

app.get('/nslarray', (req, res) => {
    fs.readFile('data3.db', 'utf8', (err, data) => {
    if (err) return console.log(err)
    res.send(data)
})
})