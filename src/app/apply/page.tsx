'use client'
import RegisterForm from '@/Components/RegisterForm/RegisterForm'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Container className='auto center'>
        <Box sx={{pb:8}} className='auto text-center w100 center'>
            <Box sx={{width:'150px'}} className='auto'>
                <img src="https://ucarecdn.com/f48b3ea2-14c1-4d42-bccd-4fd7e11ede93/435703294_7322179437817723_6804426274623400866_n.jpg" alt="" className="img" />
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