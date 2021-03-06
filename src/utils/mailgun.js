const Mailgun = require('mailgun-js');
const fs = require('fs');
const path = require('path');
exports.sendTestMail = (to) => {
    const mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
    const data = {
        from: process.env.MAILGUN_FROM,
        to: to,
        subject: 'test mail',
        html: 'test'
    };
    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
        }
        else {
            console.log(body);
        }
    });
};

exports.sendWelcome = (to) => {
    const mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
    let _path = path.resolve(__dirname,'../../mails/welcome.html');
    fs.readFile(_path, 'utf8', function(err, text) {
         const data = {
            from: process.env.MAILGUN_FROM,
            to: to,
            subject: 'Welcome to invoice-administration!',
            html: text.toString()
        };
        mailgun.messages().send(data, function (err, body) {
            if (err) {
                console.log("got an error: ", err);
            }
            else {
                console.log(body);
            }
        });
    });
};

exports.sendAttachment = (to,attachmentPath,attachmentName) => {
    const mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
    const data = {
        from: process.env.MAILGUN_FROM,
        to: to,
        subject: 'Your invoice '+attachmentName,
        html: 'You can download your invoice in the attachment',
        attachment:attachmentPath
    };
    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
        }
        else {
            console.log(body);
        }
    });
};

exports.sendToBasecone = (from,baseconeMail,attachmentPath,attachmentName,subject,description) => {
    const mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
    const data = {
        from: process.env.MAILGUN_FROM,
        to: baseconeMail,
        subject: subject,
        html: '[*'+description+'*]',
        attachment:attachmentPath
    };
    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
        }
        else {
            console.log(body);
        }
    });
};

exports.sendBugReport = (to,message,userID,userObject,ip,from) => {
    const mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
    const data = {
        from: from,
        to: to,
        subject: "New Bug report from "+userObject.email,
        html: message+"<br><hr><br>"+"This data was send on "+Date.now()+"<br> User id: "+userObject._id+"<br> Usermail: "+userObject.email+"<br> role: "+userObject.role+"<br> IP: "+ip,
    };
    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
        }
        else {
            console.log(body);
        }
    });
};

exports.sendSupport = (to,message,userID,userObject,ip,from,subject) => {
    const mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
    const data = {
        from: from,
        to: to,
        subject: subject,
        html: message+"<br><hr><br>"+"This data was send on "+Date.now()+"<br> User id: "+userObject._id+"<br> Usermail: "+userObject.email+"<br> role: "+userObject.role+"<br> IP: "+ip,
    };
    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
        }
        else {
            console.log(body);
        }
    });
};
