// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fname, lname, email, phno, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any other email service
      auth: {
        user: process.env.FROM_EMAIL, // Your email address
        pass: 'glss reut qmxe zdyc', // Your email password or app-specific password
      },
    });

    console.log(process.env.FROM_EMAIL, process.env.TO_EMAIL)
      
    const mailOptions = {
      from: email,
      to: process.env.TO_EMAIL, // Replace with your email address
      subject: `Contact Form Submission from ${fname} ${lname}`,
      text: `Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phno}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
