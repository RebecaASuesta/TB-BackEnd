const nodemailer = require('nodemailer');
require("dotenv").config();
const user = process.env.USER_NODEMAILER;
const pass = process.env.PASS_NODEMAILER;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {user,pass}
});

module.exports = transporter;