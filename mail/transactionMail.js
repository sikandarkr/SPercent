var nodemailer = require('nodemailer');
module.exports =
{
    sendMail:(res,email)=>{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'sikandar@appinessworld.com',
              pass: '9939083742'
            }
          });
          var mailOptions = {
            from: 'royalsikandar25@gmail.com',
            to: 'royalsikandar25@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({"message":"there is some issue"+error});
            } else {
             return res.json({"message":"success message...."});
            }
          });
    }
}
// apt-get sendmail
