import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

async function sendMail(email) {
    console.log(email);
    let info = await transporter.sendMail({
        from: '"Spamclub" <newsletter@spam.club>',
        to: email,
        subject: "Newsletter signed up ✔",
        text: "Thanks for signing up to the spamclub newsletter! 📰"
    });
}

export { sendMail };