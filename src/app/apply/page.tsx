'use client'
import RegisterForm from '@/Components/RegisterForm/RegisterForm'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Container className='auto center'>
        <Box sx={{pb:8}} className='auto text-center w100 center'>
            <Box sx={{width:'150px'}} className='auto'>
                <img src="https://ucarecdn.com/5aa43a6f-929b-4827-982c-b418111f0ce1/logo2.PNG" alt="" className="img" />
            </Box>
            <Box>
                <Typography component='h1' sx={{fontSize:'2.5em',fontWeight:800}} >
                    Register Today!
                </Typography>
                <Typography  className='auto center text-center' sx={{maxWidth:'700px',fontSize:'.9em'}} component='p'>
                At Prospecs, we’re not just shaping athletes, we’re shaping the future of sports. Be part of this exhilarating journey, where every achievement is a testament to human potential.
                </Typography>
            </Box>
        </Box>
        <>
         <RegisterForm/>   
        </>
    </Container>
  )
}

export default page