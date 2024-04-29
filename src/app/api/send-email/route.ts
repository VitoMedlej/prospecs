import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


import nodemailer from 'nodemailer';
import { nanoid } from 'nanoid'
// import totalCal from '@/Utils/totalCal';
// import { ObjectId } from 'mongodb';

const transporter = nodemailer.createTransport({
    host: "m2ail.smtp2go.com",
    port: 4265,
    secure: true,
    auth: {
        user: "on2beirut.com",
        pass: "USFV329btW1WeRFMm",
    },
});



 async function sendOrderConfirmationEmail(orderId: string,formState: any): Promise<boolean> {
    const { 
        fullName,
        dob,
        gender,
        country,
        city,
        address,
        email,
        phoneNumber,
        emergencyContactName,
        emergencyContactPhoneNumber,
        role,
        skillLevel,
        jerseySize,
        medicalConditions,
        specialRequests,
        referralSource,
        PaymentMethod,
        additionalInfo
      } = formState;
    try {
        // let orderId = nanoid()
        // orderId = `${orderId}`.replace(/[^a-zA-Z0-9]/g, '')?.slice(0,6)?.toUpperCase()

        // Create dynamic HTML content based on the order data
        const htmlContent =  `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }
          .field-value {
            margin-bottom: 10px;
            font-size: 16px;
          }
          .button {
            text-align: center;
            margin-top: 20px;
          }
          .button a {
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            display: inline-block;
          }
        </style>
        </head>
        <body>
          <div class="container">
            <h2>Registration Details | ID: ${orderId}</h2>
            <div class="field">
              <label for="fullName">Full Name:</label>
              <div class="field-value">{${fullName}}</div>
            </div>
            <div class="field">
              <label for="dob">Date of Birth:</label>
              <div class="field-value">{${dob}}</div>
            </div>
            <div class="field">
              <label for="gender">Gender:</label>
              <div class="field-value">{${gender}}</div>
            </div>
            <div class="field">
              <label for="country">Country:</label>
              <div class="field-value">{${country}}</div>
            </div>
            <div class="field">
              <label for="city">City:</label>
              <div class="field-value">{${city}}</div>
            </div>
            <div class="field">
              <label for="address">Address:</label>
              <div class="field-value">{${address}}</div>
            </div>
            <div class="field">
              <label for="email">Email Address:</label>
              <div class="field-value">{${email}}</div>
            </div>
            <div class="field">
              <label for="phoneNumber">Phone Number:</label>
              <div class="field-value">{${phoneNumber}}</div>
            </div>
            <div class="field">
              <label for="emergencyContactName">Emergency Contact Name:</label>
              <div class="field-value">{${emergencyContactName}}</div>
            </div>
            <div class="field">
              <label for="emergencyContactPhoneNumber">Emergency Contact Phone Number:</label>
              <div class="field-value">{${emergencyContactPhoneNumber}}</div>
            </div>
            <div class="field">
              <label for="role">Role:</label>
              <div class="field-value">{${role}}</div>
            </div>
            <div class="field">
              <label for="skillLevel">Skill Level:</label>
              <div class="field-value">{${skillLevel}}</div>
            </div>
            <div class="field">
              <label for="jerseySize">Jersey Size:</label>
              <div class="field-value">{${jerseySize}}</div>
            </div>
            <div class="field">
              <label for="medicalConditions">Medical Conditions/Allergies/Previous Injuries:</label>
              <div class="field-value">{${medicalConditions}}</div>
            </div>
            <div class="field">
              <label for="specialRequests">Special Requests or Accommodations Needed:</label>
              <div class="field-value">{${specialRequests}}</div>
            </div>
            <div class="field">
              <label for="referralSource">How did you hear about the camp?</label>
              <div class="field-value">{${referralSource}}</div>
            </div>
            <div class="field">
              <label for="PaymentMethod">Payment Method:</label>
              <div class="field-value">{${PaymentMethod}}</div>
            </div>
            <div class="field">
              <label for="additionalInfo">Additional Information:</label>
              <div class="field-value">{${additionalInfo}}</div>
            </div>
            <div class="button">
              <a href="https://prospecs.me/unsubscribe" target="_blank">Unsubscribe</a>
            </div>
          </div>
        </body>
        </html>`;

        // Send the email
        const info = await transporter.sendMail({
            from: '"Prospecs.Me" <info@prospecs.me>',
            to: 'info@prospecs.me',
            subject: "New Registration Throught The Website!",
            html: htmlContent,
        });

        console.log("Email sent: %s", info.messageId);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}

export  async function POST(req: NextRequest, res: NextApiResponse) {
  try {

  // const order = req?.body.get('order')
  const body = await req.json()
  console.log('body: ', body);
  const formState : any = null;
  let orderId = nanoid()
        orderId = `${orderId}`.replace(/[^a-zA-Z0-9]/g, '')?.slice(0,6)?.toUpperCase()
  console.log('order: ', formState);


  if (req.method === 'POST') {
    // Process a POST request
    if (!formState || !formState?.fullName) return NextResponse.json({success:false})
      console.log('formState: ', formState);
       const insertReq = await client.db("PRO").collection("Orders").insertOne({...formState,orderID: `${orderId}`});
       if (insertReq.acknowledged ) {         
        
        //  await sendOrderConfirmationEmail(orderId,formState)




         return NextResponse.json({success:true});
        }
}
return NextResponse.json({success:false});

}
catch(e) {
  console.log('e: ', e);
  return NextResponse.json({success:true});

}
}


