"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const Index = () => {
  const router = useRouter()
  return (
    <Box>
        <Box sx={{height:{xs:'300px',sm:'400px'}}} className='relative flex '>
            <img src="https://th.bing.com/th/id/R.6a6d0fd683065043866e6422daa4508a?rik=btJsXoNmO1%2fTzw&pid=ImgRaw&r=0" alt="" className="img" />
            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

</Box>
            <Container className="absolute  justify-center flex col" sx={{height:'100%',position:'absolute',zIndex:1234,color:'white'}}>
                <Typography sx={{fontWeight:900,fontSize:"2.5em"}}>
                    About Us
                </Typography>
                <Typography sx={{maxWidth:'650px',fontSize:"1em"}}>

                Welcome to our world at Prospecs, where we&apos;re dedicated to enhancing athlete engagement and optimizing their experiences through a seamless fusion of cutting-edge Capacity Development Trainings, Data, & Technology.
                
                </Typography>

            </Container>
        </Box>

        {/* <Container sx={{py:8,px:{xs:2,sm:1},maxWidth:'lg'}}>
          <Box sx={{width:'100%',height:'100%'}}>
            <img src="https://ucarecdn.com/d432b77e-cf5d-47d4-ad76-41440c25cc7b/WhatsAppImage20240309at1050181.jpeg" alt="" className="img" />
          </Box>
        </Container> */}
        <Container sx={{pt:2,px:{xs:2,sm:1}}}>
        <Box  className='flex row wrap' sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',sm:'48%',md:'60%'}}}>

  
          <Typography  className='color'>
          LEARN MORE
          </Typography>
          <Typography  sx={{maxWidth:'450px',fontSize:{xs:'1.5em',sm:'2.65em'},fontWeight:900}}>
          Revolutionizing the way athletes train
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'650px'}}>
        {`  At Prospecs, we're not just shaping athletes—we're shaping the future of sports. Join us on this exhilarating journey, where innovation knows no bounds and every achievement is a testament to the limitless possibilities of human potential.`}


       
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'650px'}}>
        {`  Our Capacity Development Trainings go beyond the traditional approach, offering dynamic programs crafted to unlock the full potential of athletes. 
         `}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'650px'}}>
          {`From personalized coaching to specialized workshops, we provide the support and guidance needed to cultivate skills, confidence, and resilience.
         `}
          </Typography>

          <Btn 
          onClick={()=>router.push('/apply')}
          sx={{mt:2,borderRadius:'0'}}>
            Apply Now
          </Btn>
          </Box>
          <Box sx={{height:{xs:'300px',sm:'400px'},mt:.5,borderRadius:'6px', width:{xs:'100%',sm:'40%'}}}>
            <img style={{borderRadius:'6px'}} src={`https://images.wsj.net/im-756202/?width=1278&size=1`} alt="" className="img" />
          </Box>
        </Box>
        </Container>
    </Box>
  )
}

export default Index