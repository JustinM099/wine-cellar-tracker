const signUpForm = document.querySelector('.signup-form');
let email = document.getElementById('.email-signup');

app.post('/', (req, res) => {
  const output = `
  <P>You have a new sign up</p>
  <h3>Contact Details</h3>
  <ul>
    <li>${req.body[0].name}</li>
    <li>${req.body[0].email}</li>
  </ul>
  `;
  // create reusable transporter object using the default SMTP transport
  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'uwproject2test@gmail.com', // left visible to verify sent emails
        pass: 'Password456', // left visible to verify emails
      },
      tls: {
        rejectUnathorized: false
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Nodemailer Contact" <uwproject2@gmail.com>', // sender address
      to: 'uwproject2test@gmail.com',  // list of receivers, we are just using the same email address
      subject: "Node New Contact", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


  }

  main().catch(console.error);

});
