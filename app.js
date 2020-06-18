const express = require("express");
const path = require("path");
const app = express();
// const fs = require("fs");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/dance-contact', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;

//Defining Schema
const contactSchema = new mongoose.Schema({
    name: "string",
    phone: "number",
    email: "string",
    address: "string",
});

const contact = mongoose.model('contact', contactSchema);


//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG Specific Stuff
app.set('view engine', 'pug')//Set the template as pug
app.set('views', path.join(__dirname, 'views'));


//Endpoint
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = { };
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res)=>{
    let myData = new contact(req.body)
    myData.save().then(()=>{
        res.send("Item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("This item was not saved to the database")
    })
    // res.status(200).render('contact.pug');
})



//Start the Server
app.listen(port, ()=>{
    console.log(`The application is successfully ported on ${port}`);
});