"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Btn from '../Btn/Btn';
import Dob from '../Dob/Dob';

export default function ControlledForm() {
    const [formState, setFormState] = useState({
        fullName: '',
        dob: '', // Date of Birth
        gender: 'male', // Gender
        country: '', // Country
        city: '', // City
        address: '', // Address
        email: '', // Email Address
        phoneNumber: '', // Phone Number
        emergencyContactName: '', // Emergency Contact Name
        emergencyContactPhoneNumber: '', // Emergency Contact Phone Number
        role: '', // Player or Coach
        skillLevel: '', // Skill Level (If player): [Beginner/Intermediate/Advanced]
        jerseySize: '', // Jersey Size (if applicable): [S/M/L/XL/XXL]
        medicalConditions: '', // Medical Conditions/Allergies/Previous Injuries
        specialRequests: '', // Special Requests or Accommodations Needed
        referralSource: '', // How did you hear about the camp?
        PaymentMethod:'',
        additionalInfo:''
      });
      console.log('formState: ', formState);




      
  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formState);
  };
  const handleSelect = (event: any) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name as string]: event.target.value,
    }));
  };
  return (
    <form style={{maxWidth:'600px'}} className='auto flex row wrap justify-between space-between' onSubmit={handleSubmit}>
      <TextField
      sx={{width:'49%',my:1}}
        name="FullName"
        label="Full Name"
        variant='outlined'
        value={formState.fullName}
        onChange={handleChange}
      />

        {/* <TextField
  sx={{width:'49%',my:1}}
  name="gender"
  label="Gender"
  variant='outlined'
  value={formState.gender}
  onChange={handleChange}
/> */}

<FormControl
      sx={{width:'49%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
      <Select
  name="gender"

        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formState.gender}
        label="Gender"
        onChange={handleSelect}
      >
        {['Male','Female'].map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

<Dob/>

<TextField
  sx={{width:'99%',my:1}}
  name="country"
  label="Country"
  variant='outlined'
  value={formState.country}
  onChange={handleChange}
/>

<TextField
  sx={{width:'99%',my:1}}
  name="city"
  label="City"
  variant='outlined'
  value={formState.city}
  onChange={handleChange}
/>

<TextField
  sx={{width:'99%',my:1}}
  name="address"
  label="Address"
  variant='outlined'
  value={formState.address}
  onChange={handleChange}
/>

<TextField
  sx={{width:'49%',my:1}}
  name="email"
  label="Email Address"
  type='email'
  variant='outlined'
  value={formState.email}
  onChange={handleChange}
/>

<TextField
  sx={{width:'49%',my:1}}
  name="phoneNumber"
  label="Phone Number"
  variant='outlined'
  value={formState.phoneNumber}
  onChange={handleChange}
/>

<TextField
  sx={{width:'49%',my:1}}
  name="emergencyContactName"
  label="Emergency Contact Name"
  variant='outlined'
  value={formState.emergencyContactName}
  onChange={handleChange}
/>

<TextField
  sx={{width:'49%',my:1}}
  name="emergencyContactPhoneNumber"
  label="Emergency Contact Phone Number"
  variant='outlined'
  value={formState.emergencyContactPhoneNumber}
  onChange={handleChange}
/>

{/* <TextField
  sx={{width:'49%',my:1}}
  name="role"
  label="Player or Coach"
  variant='outlined'
  value={formState.role}
  onChange={handleChange}
/> */}

<FormControl
      sx={{width:'49%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-role-label">Player or Coach"</InputLabel>
      <Select

  name="role"
        labelId="demo-simple-role-label"
        id="demo-simple-role"
        value={formState.role}
        label="role"
        onChange={handleSelect}
      >
        {[`Player`,`Coach`].map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

{/* <TextField
  sx={{width:'49%',my:1}}
  name="skillLevel"
  label="Skill Level (If player)"
  variant='outlined'
  value={formState.skillLevel}
  onChange={handleChange}
/> */}

<FormControl
      sx={{width:'49%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-jerseySize-label">Skill Level (If player)</InputLabel>
      <Select

  name="skillLevel"
        labelId="demo-simple-skillLevel-label"
        id="demo-simple-skillLevel"
        value={formState.skillLevel}
        label="skillLevel"
        onChange={handleSelect}
      >
        {[`Beginner`,`Intermediate`,`Advanced`].map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

{/* <TextField
  sx={{width:'49%',my:1}}
  name="jerseySize"
  label="Jersey Size (if applicable)"
  variant='outlined'
  value={formState.jerseySize}
  onChange={handleChange}
/> */}

<FormControl
      sx={{width:'49%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-jerseySize-label">Jersey Size (if applicable)</InputLabel>
      <Select

  name="jerseySize"
        labelId="demo-simple-jerseySize-label"
        id="demo-simple-jerseySize"
        value={formState.jerseySize}
        label="jerseySize"
        onChange={handleSelect}
      >
        {['S','M','L', 'XL','XXL'].map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

<TextField
multiline
rows={3}
  sx={{width:'99%',my:1}}
  name="medicalConditions"
  label="Medical Conditions/Allergies/Previous Injuries"
  variant='outlined'
  value={formState.medicalConditions}
  onChange={handleChange}
/>

<TextField
multiline
rows={3}
  sx={{width:'99%',my:1}}
  name="specialRequests"
  label="Special Requests or Accommodations Needed"
  variant='outlined'
  value={formState.specialRequests}
  onChange={handleChange}
/>

{/* <TextField

  sx={{width:'99%',my:1}}
  name="referralSource"
  label="How did you hear about the camp?"
  variant='outlined'
  value={formState.referralSource}
  onChange={handleChange}
/> */}

<FormControl
      sx={{width:'99%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-select-label">How did you hear about the camp?</InputLabel>
      <Select

  name="referralSource"
        labelId="demo-simple-referralSource-label"
        id="demo-simple-referralSource"
        value={formState.referralSource}
        label="ReferralSource"
        onChange={handleSelect}
      >
        {['Social Media','A Friend','School', 'Other'].map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

      

        <FormControl
      sx={{width:'99%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
      <Select

  name="PaymentMethod"
        labelId="demo-simple-PaymentMethod-label"
        id="demo-simple-PaymentMethod"
        value={formState.PaymentMethod}
        label="PaymentMethod"
        onChange={handleSelect}
      >
        {['Bank Transfer','Cash','Credit Card', 'Western Union','Whish','Other'].map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <TextField
multiline
rows={2}
  sx={{width:'99%',my:1}}
  name="additionalInfo"
  label="additional Information"
  variant='outlined'
  value={formState.additionalInfo}
  onChange={handleChange}
/>



        <Box>
        Declaration:

          <Typography>
I, {formState.fullName}, hereby confirm that all information provided in this registration form is true and accurate to the best of my knowledge. I understand that participation in the Basketball Training Camp with coach Phil Handy involves physical activity and agree to comply with all rules and regulations set forth by the organizers.

          </Typography>
        </Box>



        <Box sx={{width:'100%',flex:1,display:'flex'}}>

      <Btn sx={{mt:4,mx:'auto',width:'200px'}}>Submit</Btn>
        </Box>
    </form>
  );
}
