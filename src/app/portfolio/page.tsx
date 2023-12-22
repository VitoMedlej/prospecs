"use client"
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

const Index = () => {
  const router = useRouter();
  return (
    <Container>
            <Typography className='center flex auto text-center items-center' sx={{py:4,fontWeight:600,fontSize:'2.15em',maxWidth:'700px'}}>
            Our Interior Design Ideas To Inspire Every Room In Your Home
            </Typography>
            <Container>
                {
  [{
    img:'https://ucarecdn.com/f889e11f-eb71-4663-9cca-87af0db84b2f/25c049dde10d4270a29d3e9e53a7b74c.jpg',
    title:'Talet Al Khayat Project',
    id:'UIn2j41',
  }].map(i=>{
                        return  <Box
                        key={i?.id}
                        sx={{cursor:'pointer'}}
                        onClick={()=>router.push(`/portfolio/${i?.id}?title=${i.title.replace(/ /g,'-')}`)}>
                       

                        <Box key={i.title} sx={{py:1,height:{xs:'100%',sm:'400px'}}}>
                            <img src={i.img} alt="" className="img cover" />


                        </Box>
                        <Box>
                        <Typography sx={{color:'white',fontSize:{xs:'1.5em',sm:'2.5em',md:'2em',lg:'2.8em'},fontWeight:900}}>
                               {i?.title}
                                </Typography>
                        </Box>
                        </Box>
                    })
                }
            </Container>
    </Container>
  )
}

export default Index