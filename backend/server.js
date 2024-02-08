const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun-js');

dotenv.config();


const mailgun =() => mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/api/email', (req,res)=>{
    const {email, message}= req.body;
    mailgun()
    .messages()
    .send({
        from: `${email}`,
        to: 'Victor <victor.hugo.silva371@gmail.com>',
        subject:`PORTFOLIO MESSAGES`,
        html: `<p>${message}</p>`,
    }, 
    (error, body)=> {
        if (error){
        console.log(error);
        res.status(500).send({message:'Error in sending E-mail'}) 
       } else {
        console.log(body);
        res.send({message: 'E-mail was sent sucessfully'});
      }
    })
})
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})