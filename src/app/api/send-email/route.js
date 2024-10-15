import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstName, lastName, email, phoneNumber, message } = await req.json();
    

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any other email service
      auth: {
        user: process.env.FROM_EMAIL, // Your email address
        pass: 'glss reut qmxe zdyc', // Your email password or app-specific password
      },
    });
      
    const mailOptions = {
      from: email,
      to: process.env.TO_EMAIL, // Replace with your email address
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return Response.json({ message: 'Email sent successfully' }, {status: 200});
     // res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
    //   res.status(500).json({ error: 'Failed to send email' });
      return Response.json({error: 'Failed to send email' }, {status: 500});
    }
}