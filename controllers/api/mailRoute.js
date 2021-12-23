const router = require('express').Router();
const { User } = require('../../models/User');


const router = require('express').Router();


// Would like to send email after they have entered contents of cellar
append.post('/send', (req, res) => {
    const emailBody = `
    <p>Thank you ${req.body.name} signing up</p>
    <h1>Here the inventory of your cellar</h1> 
    <ul>
        <li>Name: ${req.body.name} </li>
    `
}
)