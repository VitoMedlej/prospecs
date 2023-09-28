"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from './Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img : `https://ucarecdn.com/4b553e20-2359-4dd7-858d-353b4bbedb80/chrisshelby.jpg`},
       
     ])
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'500px',
          
            margin: '0 auto',
            height : {xs:'100vh',sm:'650px'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        onClick={() => router.push('/')}
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='auto' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

                            </Box>
                            <Box 
                            className='auto'
                            sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                maxWidth:'550px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography sx={{color:'white',fontSize:{xs:'2.5em',sm:'3.5em',md:'4em',lg:'4em'},fontWeight:900}}>
                                Experience the Power of Nature
                                </Typography>
                                <Typography sx={{color:'white',fontSize:{xs:'.85em',sm:'.89em'},mt:1,maxWidth:'600px'}}>
                                Welcome to Truenaturalblend, your one-stop-shop for all your health and wellness needs. Discover our premium selection of natural supplements including ashwagandha, tongkat ali, cordyceps mushroom, lion manes mushroom, and more.
                                </Typography>
                                <Box className="flex">

                                <Btn className='bg white borderColor' sx={{mt:3}}>
                                    Explore
                                </Btn>
                             
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img pointer  
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3