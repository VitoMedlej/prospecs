"use client"

import {Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateComponent: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Box sx={{mb:1}} className='center w100 flex col'>
    <Typography sx={{fontSize:'.7em'}}>
        Date of birth:
    </Typography>
    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
    </Box>
  );
};

export default DateComponent;
