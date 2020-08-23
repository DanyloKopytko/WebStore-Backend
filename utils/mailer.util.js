const mailer = require('nodemailer');

module.exports = async (subject, body, email) => {
    try {
        const transport = mailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MAILER_EMAIL,
                pass: process.env.MAILER_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transport.sendMail({
            from: 'webstore@no-reply',
            to: email,
            subject: subject,
            html: `${body}`
        });
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
};
