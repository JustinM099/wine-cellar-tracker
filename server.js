const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
console.log(' PR testing!')
// added for nodemailer
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Confidential',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// added for nodemailer
// app.engine('handlebars', exphbs());
// view engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



// added for nodemailer
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/send', (req, res) => {
  const output = `
  <P>You have a new sign up</p>
  <h3>Contact Details</h3>
  <ul>
    <li>${req.body.name}</li>
    <li>${req.body.email}</li>
  </ul>
  `;
  // create reusable transporter object using the default SMTP transport
  async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 456,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'uwproject2@gmail.com', // generated ethereal user
      pass: 'Password456', // generated ethereal password
    },
    tls:{
      rejectUnathorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Nodemailer Contact" <uwproject2@gmail.com>', // sender address
    to: 'uwproject2@gmail.com',  // list of receivers, we are just using the same email address
    subject: "Node New Contact", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
}

main().catch(console.error);

});







