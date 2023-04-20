/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors({
  origin: true,
}));

app.use(express.json());

// -----------------------Send Emails-----------------------------//

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD
    }
});

app.post("/access", (req, res, next) => {
    const request_params = req.body
    console.log('someone emailing')

    const mail = {
        from: `${request_params.contactEmail}`,
        to: `joshuaforvermont@gmail.com`,
        subject:
        `Message from ${request_params.contactName}`,
        html:
        `${request_params.contactMessage} Sent from website by
        ${request_params.contactName} ${request_params.contactEmail}`
    }

    

    transporter.sendMail(mail, (err, data) => {

        if (err) {
            console.log(`${err}`)
            res.json({
                status: "fail"
            })
        } else {
            res.json({
                status: "success"
            })
        }
    })
})

app.post("/schedule", (req, res, next) => {
    const request_params = req.body
    console.log('someone emailing')

    const mail = {
        from: `${request_params.contactEmail}`,
        to: `joshuaforvermont@gmail.com`,
        subject:
        `Speaking Request from ${request_params.contactName}`,
        html:
        `Name: ${request_params.contactName}
        Orginization: ${request_params.orginization}
        Phone Number: ${request_params.contactPhone}
        Date: ${request_params.date}
        Time: ${request_params.time}
        Address: ${request_params.address}
        Special Notes: ${request_params.notes}
        
        Sent from website by
        ${request_params.contactName} ${request_params.contactEmail}`
    }

    transporter.sendMail(mail, (err, data) => {

        if (err) {
            alert('This function is currently under construction');
            res.json({
                status: "fail"
            })
        } else {
            res.json({
                status: "success"
            })
        }
    })
})


app.get("*", (req, res) => {
  res
      .status(404)
      .send("404 Not Found.");
});

exports.api = functions.https.onRequest(app);

