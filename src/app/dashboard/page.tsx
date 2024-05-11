"use client"
import FormD from '@/app/FormD/FormD';
import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
  const [password, setPassword] = useState('');

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };
  if (
    password === `1515`
  ){
    return (
      <FormD/>
    )
  }
  return (
    <Box className='flex row center items-center justify-center' sx={{margin:'2em auto'}}>
      Enter Password: 
      <TextField
        value={password}
        name='password'
        type='password'
        onChange={handleChange}
      />
    </Box>
  );
};

export default Page;
