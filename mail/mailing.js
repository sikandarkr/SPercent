const sgMail = require('@sendgrid/mail');
module.exports =
{
    sendMail:(email,callback)=>{
        var name= "sikandar";
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'sikandar@appinessworld.com',
            from: 'royalsikandar26@gmail.com',
            subject: 'Email Confirmation mail',
            text: 'verify your mail to login successfully on the website',
            html: `<html>
                        <head>
                            <p style="margin-left:40%;"><b>Appiness Intractive </b></p>
                            <hr style="width:100%;margin-top:-5%; color:grey"></hr>
                        </head>
                        <body>
                            <h2 style="color:black; margin-left:20%"> <b>Hi, ${name}! </b></h2>
                            <p style="margin-left:10% !important;">To complete email verification, please press the button below </p>
                                <a style="height:100px !important; width:40% !important;background-color:blue; margin-left:20%;color:white;border-radius:5% !important;color:white !important;text-decoration:none;" 
                                    href="https://templates.mailchimp.com/getting-started/html-email-basics/">
                                        Click Here To Verify
                                </a></br>
                                <p style="margin-left:10%;"> If you didn't create account using this address ,Please ignore this message </p>
                        </body>
                    </html>`,
            };
            sgMail.send(msg,function(error){
                if(error){
                   callback("err", null);
                }
                else{
                    callback(null, "success");
                }
            });


    }
}