"use client"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Container>
            <Typography className='center flex auto text-center items-center' sx={{py:4,fontWeight:600,fontSize:'2.15em',maxWidth:'700px'}}>
            Our Interior Design Ideas To Inspire Every Room In Your Home
            </Typography>
            <Container>
                {
                    ['https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/f651620d-d527-4ed9-89a4-50c9d86001c1',`https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/d7fed68a-c204-4e29-afc6-a3621debfe4b`,`https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/aa78a016-7a07-4446-8df6-c3ac282514a8`,`https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/ce0b7154-9cae-4f94-9970-6d3a12d7a086`,`https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/9204d592-443f-4f42-a959-8690edd9cc4d`,`https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/88930b62-714e-44ee-9014-9ad834298632`].map(i=>{
                        return <Box key={i} sx={{py:1,height:{xs:'100%',sm:'600px'}}}>
                            <img src={i} alt="" className="img cover" />
                        </Box>
                    })
                }
            </Container>
    </Container>
  )
}

export default Index