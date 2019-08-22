const userModel = require("../../models/users");
const bcrypt = require("bcryptjs");
const mail = require('../../mail/mailing')
const jwt = require("jsonwebtoken");
module.exports =
{
    create:async(req,res,next)=>{
        mail.sendMail(res,function(err,success){
            if(success){
                return res.json({"message":"email sent successfully"});
            }
            else{
                return res.json({"message":"There was some error while sending mail....."});
            }
        }) 
    },
    authenticate:async(req,res,next)=>{
        console.log("api is being hit from client ..... ");
        return res.json({"status":"200"})
        // const {userName,password} = req.body;
        userModel.findOne({$or: [
            {userName: req.body.userName},
            {email: req.body.userName}
        ]}).exec(function(err,  userInfo){
            if(err){
                // next(err);
                return res.json({"message":"User Not Existed",status:400,response:null});

            }
            else{
                var result = bcrypt.compareSync(req.body.password, userInfo.password);
                if (result) {
                    const token = jwt.sign(
                        { id: userInfo._id },
                        req.app.get("secretKey"),
                        { expiresIn: "22h" }
                        );
                        // console.log(userInfo.userName);
                        return res.status(200).json(
                            {   "messaage":"success",
                                "token":token,
                                "status":201,
                                "userName":userInfo.userName,
                                "available_balance":userInfo.available_balance,
                                "gender":userInfo.gender,
                                "isSuccess":true
                            }
                        );
                } else {
                    return res.status(200).json(
                        {   "messaage":"login failed",
                            "token":null,
                            "status":401,
                            "response":null,
                        });
                }
            }
        });
    }
}
