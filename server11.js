const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")



const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
    extname: '.hbs',
    partialsDir: "views/partials",
}));
app.set('view engine', 'hbs');                           // określenie nazwy silnika szablonów

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))
app.use(express('data'))

// app.get("/login", function (req, res) {
//     res.render('login.hbs', context);   // nie podajemy ścieżki tylko nazwę pliku
//     // res.render('login.hbs', context);
// })

app.get("/index", function (req, res) {
    res.render('index11.hbs', context);   // nie podajemy ścieżki tylko nazwę pliku
    // res.render('index.hbs', context);
})

app.post("/handleForm", function (req, res) {

})

const context = {
    "subject": "T: ćwiczenie 9 - użycie helperów",
    "title": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
}