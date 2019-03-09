const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


let items = [];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req,res) => {
    let day = date.getDate()
    res.render('list', {listType: day, items: items});
});

app.post('/', (req,res) => {
    let newItem = req.body.item;
    if(req.body.list === "work"){
        workItems.push(newItem);
        res.redirect("/work")
    }else{
        items.push(newItem);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render("list", {listType: "work", items: workItems})
});

app.listen(3000, () => {console.log("server has been started on port 3000")})