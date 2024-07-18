const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to send email
app.post('/send-email', async (req, res) => {
    const { to, subject, text, html } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use any other email service
        auth: {
            user: 'sreelakshmi0067@gmail.com', 
            pass: 'bgwc htfp flaz zhev ',
        },
    });

    // Email options
    let mailOptions = {
        from: 'sreelakshmi0067@gmail.com', // Sender address
        to: "angelin0107vs@gmail.com",
        subject: "Always be grateful for this beautiful life on earth",
        text: "Really good news",
       
    };

    // Send mail with defined transport object
    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
