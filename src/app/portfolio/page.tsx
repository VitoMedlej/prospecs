"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper';
import Btn from '@/Components/Btn/Btn';


const Index = () => {
  const router = useRouter();
  return (
    <Box >
            
            <Box sx={{height:{xs:'300px',sm:'400px'}}} className='relative flex '>
            <img src="https://images.havenly.com/unsafe/fit-in/1920x1920/filters:format(webp):quality(99)/https://s3.amazonaws.com/static.havenly.com/content/backgrounds/shop_banner.jpg" alt="" className="img" />
            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

</Box>
            <Container className="absolute  justify-center flex col" sx={{height:'100%',position:'absolute',zIndex:1234,color:'white'}}>
                <Typography sx={{fontWeight:900,fontSize:"2.5em"}}>
                    Our Projects
                </Typography>
                <Typography sx={{maxWidth:'650px',fontSize:"1em"}}>

                Our Interior Design Ideas To Inspire Every Room In Your Home
                
                </Typography>

            </Container>
        </Box>
    
            <Box sx={{py:6,maxWidth:'none',my:8,background:'rgb(247, 247, 247)'}}>
    <Container>
    <Typography sx={{textAlign:'center',width:'100%',pb:2,fontWeight:500,fontSize:"1.64em"}}>

    Featured Work

</Typography>
                {
  [{
    img:'https://ucarecdn.com/f889e11f-eb71-4663-9cca-87af0db84b2f/25c049dde10d4270a29d3e9e53a7b74c.jpg',
    title:'Talet Al Khayat Project',
    id:'UIn2j41',
  }].map(i=>{
                        return  <Box
                        key={i?.id}
                        // className='auto' 
                        sx={{maxWidth:{xs:'100%',sm:'350px'},
                        height:{xs:'100%',sm:'500px',md:'550px'}
                        ,cursor:'pointer'}}
                        onClick={()=>router.push(`/portfolio/${i?.id}?title=${i.title.replace(/ /g,'-')}`)}>
                       

                        <Box key={i.title} sx={{py:1,maxHeight:{xs:'100%',sm:'400px',md:'550px'}}}>
                            <img src={i.img} alt="" className="img cover" />
                        </Box>
                        <Box>
                        <Typography 
                        
                        sx={{textAlign:'left',
                        color:'black',
                        fontSize:{xs:'.8em',sm:'.96em',md:'1em',lg:'1.12em'},
                        fontWeight:400}}>
                               {i?.title}
                                </Typography>
                        </Box>
                        </Box>
                    })
                }
    </Container>

            </Box>
    </Box>
  )
}

export default Index