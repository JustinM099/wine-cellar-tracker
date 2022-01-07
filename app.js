// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const nodemailer = require('nodemailer');
// const path = require('path');

// const app = express();

// view engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// body parser middleware
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('');
// });

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'uwproject2test@gmail.com',
//         pass: 'Password456'
//     }
// });

// let mailOptions = {
//     from: 'uwproject2test@gmail.com',
//     to: '',
//     subject: 'Welcome to Wine Cellar',
//     text: 'Thank you for signing up!',
//     html: '<h1>Thank you for signing up!</h1>'
// };

// transporter.sendMail(mailOptions, function(err, data){
//     if (err) {
//         console.log('Error');
//     } else {
//         console.log('email sent')
//     }
// });

// app.listen(3001, () => console.log('server started'));
