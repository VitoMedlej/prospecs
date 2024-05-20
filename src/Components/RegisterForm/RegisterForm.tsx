"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Btn from '../Btn/Btn';
import Dob from '../Dob/Dob';
import dayjs, { Dayjs } from 'dayjs';



const allCountries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "United Kingdom",
  "Lebanon",
  "Algeria",
  "Syria",

  "Afghanistan",
  "Albania",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];



export default function ControlledForm() {
  const [startDate, setStartDate] = React.useState<any>(null);

    const [formState, setFormState] = useState({
        fullName: '',
        dob: `${startDate?.$d}`, // Date of Birth
        gender: '', // Gender
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
      
      const [status,setStatus] = useState({isSubmitting: false, isSent:false,failed:false})




      
  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };


  console.log('formState: ', {...formState, dob: `${startDate?.$d}` });
  console.log('startDate: ', startDate?.$d);
  async function sendEmail(formState: any) {
    setFormState({...formState, dob: `${startDate?.$d}` })


    const url = process.env.NEXT_PUBLIC_URL + "/api/send-email";
    setStatus({isSubmitting:true,isSent:false,failed:false})

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message: formState}),
        });

        console.log('response: ', response);
        if (!response.ok) {
            setStatus({isSubmitting:false,isSent:false,failed:false})
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        

        const data = await response.json();
        console.log('data: ', data);
        if (data?.success === false) {
          
        setStatus({isSubmitting:false,isSent:false,failed:true})
        return
      }
        setStatus({isSubmitting:false,isSent:true,failed:false})


        return data;
    } catch (error) {
        console.error('There was an error!', error);
        setStatus({isSubmitting:false,isSent:false,failed:false})


    }
}
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setStatus({isSubmitting:true,isSent:false,failed:false})

    
    console.log(formState);
    sendEmail(formState);
    setStatus({isSubmitting:false,isSent:true,failed:false})


  };
 


  const handleSelect = (event: any) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name as string]: event.target.value,
    }));
  };

  if (status?.isSubmitting === false && status?.isSent === true && status?.failed === false) return (
    <Box className='center flex text-center'>
      <Typography component='h2' sx={{fontWeight:600,maxWidth:'700px'}}>
        Thank you for registering! Expect an email from us soon.
      </Typography>
    </Box>
  )
  return (
    <form 
    
    
    style={{maxWidth:'600px'}} className='auto flex row wrap justify-between space-between'
    
    onSubmit={handleSubmit}>
      <TextField
      required
      sx={{width:'99%',my:1}}
        name="fullName"
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
      sx={{width:'99%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
      <Select
      required

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

<Dob startDate={startDate ? startDate : null} setStartDate={setStartDate}/>

{/* <TextField
  sx={{width:'99%',my:1}}
  name="country"
  label="Country"
  variant='outlined'
  value={formState.country}
  onChange={handleChange}
/> */}

<FormControl
      sx={{width:'99%',my:1}}

fullWidth>
      <InputLabel id="demo-simple-Country-label">Country</InputLabel>
      <Select
      required

  name="country"

        labelId="demo-simple-Country-label"
        id="demo-simple-Country"
        value={formState.country}
        label="Gender"
        onChange={handleSelect}
      >
        {allCountries.map((option, index) => (
          <MenuItem key={index} value={option?.toLocaleLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>


<TextField
  sx={{width:'99%',my:1}}
  name="city"
  required

  label="City"
  variant='outlined'
  value={formState.city}
  onChange={handleChange}
/>

<TextField
  sx={{width:'99%',my:1}}
  name="address"
  required

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
  required

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
      <InputLabel id="demo-simple-role-label">Player or Coach</InputLabel>
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
      required

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
      sx={{width:'99%',my:1}}

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
  label="Additional Information"
  variant='outlined'
  value={formState.additionalInfo}
  onChange={handleChange}
/>



        <Box>

          <Typography>
{`I, hereby confirm that all information provided in this registration form is true and accurate to the best of my knowledge. I understand that participation in the Basketball Training Camp with coach Phil Handy involves physical activity and agree to comply with all rules and regulations set forth by the organizers.
`}
          </Typography>
        </Box>



        <Box className='col' sx={{width:'100%',flex:1,display:'flex'}}>
      <Btn 
      disabled={status?.isSubmitting}
      type='submit'
      sx={{mt:4,mx:'auto',width:'200px'}}>Submit</Btn>
        </Box>
        <Typography sx={{pt:1,fontSize:'.67em'}}>
          {
           `By clicking ‘Submit’, you confirm that you give us consent to send you emails, and that you comply with our acceptable use policy, which includes maintaining up-to-date mailing lists and ensuring all recipients have opted in to receive emails.`
          }
          </Typography>
    </form>
  );
}
