const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "oliverlemonakis.job@gmail.com",
    pass: "|UB7,m]W6CaW8]1G",
  },
});