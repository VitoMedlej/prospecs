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
    <Container className='auto' sx={{maxWidth:'xl'}}>
    <Typography sx={{textAlign:'center',width:'100%',pb:2,fontWeight:500,fontSize:"1.64em"}}>

    Featured Work

</Typography>
<Box className="flex wrap row space-around">

                {
  [{
    img:'https://ucarecdn.com/f889e11f-eb71-4663-9cca-87af0db84b2f/25c049dde10d4270a29d3e9e53a7b74c.jpg',
    title:'Talet Al Khayat Project',
    id:'UIn2j41',
  },

  {
    title : 'Toledo Project',
    img:'https://ucarecdn.com/525987cf-f7f0-49c7-8144-7c6d17b5f72b/photo_5767334647334812873_y.jpg',
    id:'42NC25'
  },{
  img:    `https://ucarecdn.com/daafbd8b-5308-476b-b5be-e506acc670a0/photo_5767334647334812879_y1.jpg`,
  title : 'Toledo Project 2',
   id:'Yo6mz2',

  }
].map(i=>{
                        return  <Box
                        key={i?.id}
                        // className='auto' 
                        sx={{width:{xs:'100%',sm:'350px',md:'400px'},
                        // height:{xs:'100%',sm:'500px',md:'550px'},
                        height:'fit-content',
                        mx:1,
                        my:1
                        ,cursor:'pointer'}}
                        onClick={()=>router.push(`/portfolio/${i?.id}?title=${i.title.replace(/ /g,'-')}`)}>
                       

                        <Box key={i.title} sx={{py:1,height:{xs:'100%',sm:'280px',md:'300px'}}}>
                            <img src={i.img} alt="" className="img cover" />
                        </Box>
                        <Box>
                        <Typography 
                        
                        sx={{textAlign:'left',
                        color:'black',
                        fontSize:{xs:'1.189em',sm:'1.196em',md:'1.3em',lg:'1.42em'},
                        fontWeight:600}}>
                               {i?.title}
                                </Typography>
                        </Box>
                        </Box>
                    })
                }
</Box>

    </Container>

            </Box>
    </Box>
  )
}

export default Index