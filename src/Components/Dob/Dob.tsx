"use client"

import {Box, Typography } from '@mui/material';
import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const DateComponent: any = ({setStartDate,startDate} : any) => {
  return (
    <Box sx={{mb:1}} className='center w100 flex col'>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
      <DatePicker
      sx={{width:'99%'}}
        name="fullName"
        
          label="Date of Birth"
          value={startDate ? startDate : null}
          onChange={(newValue:any) => setStartDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
    {/* <DatePicker dateFormat='MM/DD/YY'
    
    selected={startDate} 
    
    onChange={(date: Date) => setStartDate(date)} /> */}
    </Box>
  );
};

export default DateComponent;
