const User = require('../../models/User');
const router = require('express').Router();
const nodemailer = require('nodemailer');

// Would like to send email after they have entered contents of cellar
router.post('/', (req, res) => {
  const output = `
      <h1>Welcome!</h1>
      <h1>Contact Details</h3>
      <ul>
        <li>User name is: ${req.body.username}</li>
        <li>Email listed: ${req.body.email}</li>
      </ul>
      <h2> Sincerely,</h2> 
      <p>Wine Cellar Tracker creators</p>
      `;

  // create reusable transporter object using the default SMTP transport
  async function main() {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'Project2testUW@gmail.com', // Left visible for graders to view sent mail
        pass: 'New123pass456word789!', // Left visible for graders to login
      },
      tls: {
        rejectUnathorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Nodemailer Wine Cellar Tracker" <uwproject2test@gmail.com>', // sender address
      to: req.body.email, // targeted email
      subject: 'Welcome to your online Wine Cellar Tracker', // Subject line
      text: 'Thank you for using Wine Cellar Tracker', // plain text body
      html: output, // html body
    });


    res.status(200).json(info);
  }

  main().catch(console.error);
});

module.exports = router;
