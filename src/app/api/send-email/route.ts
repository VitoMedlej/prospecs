import client from '@/database/mongodb';
import { sendEmail } from '@/Utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


async function sendOrderConfirmationEmail(formState: any): Promise<boolean> {
  
  const applicant = formState;
  console.log('applicant: ', applicant);
  const htmlContent = `<html lang="en">
  <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Website Message</title>
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
              display:flex;
              flex-direction: row;
              gap:1;
              padding-bottom: .25em
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
          .imgg {
            width : 100px;
            max-width:100px;
          }
      </style>
  </head>
  <body>
  <div class="container">
  <div class='cont'>
  <img class='imgg' src='https://ucarecdn.com/09c3a7b0-509a-485d-a988-7a8bae7dd575/logobia.jpg' />
  </div>
          <h2>You received a new message through the website from ${applicant?.FullName}</h2>
          <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>Application Details</h2>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Full Name:</strong> ${applicant.fullName}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Date of Birth:</strong> ${formState.dob}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Gender:</strong> ${applicant.gender}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Country:</strong> ${applicant.country}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>City:</strong> ${applicant.city}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Address:</strong> ${applicant.address}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Email:</strong> ${applicant.email}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Phone Number:</strong> ${applicant.phoneNumber}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Emergency Contact Name:</strong> ${applicant.emergencyContactName}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Emergency Contact Phone Number:</strong> ${applicant.emergencyContactPhoneNumber}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Role:</strong> ${applicant.role}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Skill Level:</strong> ${applicant.skillLevel}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Jersey Size:</strong> ${applicant.jerseySize}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Medical Conditions:</strong> ${applicant.medicalConditions}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Special Requests:</strong> ${applicant.specialRequests}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Referral Source:</strong> ${applicant.referralSource}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Payment Method:</strong> ${applicant.PaymentMethod}
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <strong>Additional Info:</strong> ${applicant.additionalInfo}
              </div>
          </div>
      </div>
  </body>
</html>`;

  const options = {
      from: '"prospecs.me" <registration@prospecs.me>',
      to: 'registration@prospecs.me',
      subject: "New Registration Through The Website!",
      html: htmlContent,
  };

  return  await sendEmail(options);
}

export  async function POST(req: NextRequest, res: NextApiResponse) {


  const {message} = await req.json()
  console.log('applicant: ', message);
  if (req.method === 'POST') {
    // Process a POST request
    if (!message) return NextResponse.json({success:false})
       const insertReq = await client.db("PRO").collection("Messages").insertOne({message});
      
    
    
    // let result : any= 'true';
    const result =  await sendOrderConfirmationEmail(message);
    console.log('result: ', result);
    // console.log('result: ', result);

    if (insertReq?.acknowledged && result == true) {         
      return NextResponse.json({success:true});
     }


}
return NextResponse.json({success:false});

}