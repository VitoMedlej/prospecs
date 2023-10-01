"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Box sx={{height:{xs:'300px',sm:'400px'}}} className='relative flex '>
            <img src="https://images.havenly.com/unsafe/fit-in/1920x1920/filters:format(webp):quality(99)/https://s3.amazonaws.com/static.havenly.com/content/backgrounds/shop_banner.jpg" alt="" className="img" />
            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

</Box>
            <Container className="absolute  justify-center flex col" sx={{height:'100%',position:'absolute',zIndex:1234,color:'white'}}>
                <Typography sx={{fontWeight:900,fontSize:"2.5em"}}>
                    About Us
                </Typography>
                <Typography sx={{maxWidth:'700px',fontSize:"1em"}}>

                Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.
                </Typography>

            </Container>
        </Box>
        <Container sx={{pt:8}}>
        <Box  className='flex row wrap' sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',sm:'48%'}}}>

  
          <Typography  className='color'>
          LEARN MORE
          </Typography>
          <Typography  sx={{maxWidth:'400px',fontSize:{xs:'1.5em',sm:'2.5em'},fontWeight:600}}>
          Our Network
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1.1em'},pb:.65,maxWidth:'550px'}}>
          Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1.1em'},pb:.65,maxWidth:'550px'}}>
          Added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </Typography>
          <Btn sx={{borderRadius:'0'}}>
            Reach Us
          </Btn>
          </Box>
          <Box sx={{height:{xs:'300px',sm:'400px'},mt:.5,borderRadius:'6px', width:{xs:'100%',sm:'48%'}}}>
            <img style={{borderRadius:'6px'}} src={`https://images.havenly.com/unsafe/1200x804/filters:quality(50)/https://s3.amazonaws.com/static.havenly.com/assets/ce0b7154-9cae-4f94-9970-6d3a12d7a086`} alt="" className="img" />
          </Box>
        </Box>
        </Container>
    </Box>
  )
}

export default Index