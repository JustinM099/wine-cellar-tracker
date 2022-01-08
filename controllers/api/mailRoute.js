const User = require('../../models/User');
const router = require('express').Router();
const nodemailer = require('nodemailer');

// Would like to send email after they have entered contents of cellar
router.post('/', (req, res) => {
  const output = `
      <P>Welcome!</p>
      <h3>Contact Details</h3>
      <ul>
        <li>User name is: ${req.body.username}</li>
        <li>Email listed: ${req.body.email}</li>
      </ul>
      `;

  // create reusable transporter object using the default SMTP transport
  async function main() {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'Project2testUW@gmail.com', // generated ethereal user
        pass: 'Password456', // generated ethereal password
      },
      tls: {
        rejectUnathorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Nodemailer Contact" <uwproject2test@gmail.com>', // sender address
      to: req.body.email, // list of receivers, we are just using the same email address
      subject: 'Welcome to your online wine cellar', // Subject line
      text: 'Thank you for using wine cellar', // plain text body
      html: output, // html body
    });
    console.log(req.body.email, 'email hit?');

    res.status(200).json(info);
  }

  main().catch(console.error);
});

module.exports = router;
