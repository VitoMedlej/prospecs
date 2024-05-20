"use client"
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState<any>(null);
  console.log('data: ', data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 0 } });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs once on mount

  return (
    <Box className='' sx={{}}>
      {data ?
      
      // (
        // <pre> {`${i?.JSON.stringify(data?.data?.featuredProducts)}`}</pre>
      // ) 
    
      (
        data?.data?.featuredProducts.map((i:any)=>{
          
      
          return <div style={{
            borderBottom:'1px solid gray',
            paddingTop:'1em',
            margin:'1em'}} 
            key={i?.orderId}
            className="container">
      
        <div className="field">
        {/* {i?.orderId} */}
          <label htmlFor="fullName">Full Name:</label>
          <div className="field-value">{i?.fullName}</div>
        </div>
        <div className="field">
          <label htmlFor="dob">Date of Birth:</label>
          <div className="field-value">{i?.dob}</div>
        </div>
        <div className="field">
          <label htmlFor="gender">Gender:</label>
          <div className="field-value">{i?.gender}</div>
        </div>
        <div className="field">
          <label htmlFor="country">Country:</label>
          <div className="field-value">{i?.country}</div>
        </div>
        <div className="field">
          <label htmlFor="city">City:</label>
          <div className="field-value">{i?.city}</div>
        </div>
        <div className="field">
          <label htmlFor="address">Address:</label>
          <div className="field-value">{i?.address}</div>
        </div>
        <div className="field">
          <label htmlFor="email">Email Address:</label>
          <div className="field-value">{i?.email}</div>
        </div>
        <div className="field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <div className="field-value">{i?.phoneNumber}</div>
        </div>
        <div className="field">
          <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
          <div className="field-value">{i?.emergencyContactName}</div>
        </div>
        <div className="field">
          <label htmlFor="emergencyContactPhoneNumber">Emergency Contact Phone Number:</label>
          <div className="field-value">{i?.emergencyContactPhoneNumber}</div>
        </div>
        <div className="field">
          <label htmlFor="role">Role:</label>
          <div className="field-value">{i?.role}</div>
        </div>
        <div className="field">
          <label htmlFor="skillLevel">Skill Level:</label>
          <div className="field-value">{i?.skillLevel}</div>
        </div>
        <div className="field">
          <label htmlFor="jerseySize">Jersey Size:</label>
          <div className="field-value">{i?.jerseySize}</div>
        </div>
        <div className="field">
          <label htmlFor="medicalConditions">Medical Conditions/Allergies/Previous Injuries:</label>
          <div className="field-value">{i?.medicalConditions}</div>
        </div>
        <div className="field">
          <label htmlFor="specialRequests">Special Requests or Accommodations Needed:</label>
          <div className="field-value">{i?.specialRequests}</div>
        </div>
        <div className="field">
          <label htmlFor="referralSource">How did you hear about the camp?</label>
          <div className="field-value">{i?.referralSource}</div>
        </div>
        <div className="field">
          <label htmlFor="PaymentMethod">Payment Method:</label>
          <div className="field-value">{i?.PaymentMethod}</div>
        </div>
        <div className="field">
          <label htmlFor="additionalInfo">Additional Information:</label>
          <div className="field-value">{i?.additionalInfo}</div>
        </div>
       
      </div>
        })
      )
      

      
      : (
        <div>Loading...</div>
      )}
    </Box>
  );
};

export default FetchDataComponent;