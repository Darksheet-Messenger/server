module.exports = (email) => {
    const nodemailer = require('nodemailer');
    //const smtp = require('nodemailer-smtp-transport');

    const myEmail = 'lucasdevsoftware@gmail.com';
    
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: myEmail,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var body = {
        from: myEmail,
        to: email,
        subject: 'Validação de email: 967921',
        html: '<h3>Seja bem vindo ao nosso app!</h3>'
    };

    transport.sendMail(body, (error, info) => {
        if (error)
            console.log(`Falha no envio do email! -> ${error.message}`);
        else
            console.log(`Email enviado com sucesso! -> ${info.response}`);
    });
};