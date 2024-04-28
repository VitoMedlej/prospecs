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
        {img:'https://wallpapercave.com/wp/wp5098925.jpg'},
        // {img : `https://th.bing.com/th/id/R.1bd115eb313eb77c1b1adab41764509c?rik=we51JeZavsx%2fIQ&pid=ImgRaw&r=0`},
        // {img : `https://th.bing.com/th/id/R.f9a5184c0cdaa5fb293c10d30f1d44e7?rik=A4JN4HLwTn4ZZQ&pid=ImgRaw&r=0`},
       
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
        <>
        
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'500px',
          
            margin: '0 auto',
            height : {xs:'100%  ',sm:'650px'},
             
            display: {
                xs: 'none',
                md:'flex'
            },
            // mt:20,
        }}>
            <Swiper

                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 305500,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        // onClick={() => router.push('/')}
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='auto' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black'
                            ,opacity:.57}} className="absolute auto">

                            </Box>
                            <Box 
                            className='auto center  text-center'
                            sx={{
                                top:'50%',
                               
                                // maxWidth:'750px',
                                width: {xs:'100%',xl:'auto'},
                                // transform:{xs:'translate(0%,-50%)'},
                                transform:{xs:'translate(0%,-50%)',xl:'translate(25%,-50%)'},
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                className='center  text-center auto'
                                    component='h1'
                                
                                sx={{color:'white',fontSize:{xs:'2.5em',sm:'3.5em',md:'4em',
                                lg:'4em'},fontWeight:900}}>
                          Unleash Your Potential with Prospecs
                                </Typography>

                                <Typography
                                    component='h2'

                                className='center  text-center auto'
                                
                                sx={{
                                    
                                    fontWeight:300,
                                    color:'white',fontSize:{xs:'.85em',sm:'.89em'}
                                ,mt:1,maxWidth:'600px'}}>
                             Embark on a transformative journey with Prospecs, where we empower athletes with innovative Capacity Development Trainings
                                </Typography>
                                <Box className="flex">

                                <Btn
                        onClick={() => router.push('/register')}
                                
                                className='bg white  center borderColor' sx={{mx:'auto',mt:3}}>
                                    Register
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
        <Box sx={{
            
            display:{xs:'flex',md:'none'},height:'100%'}}>
            <img src="https://ucarecdn.com/4a7e0e1c-47b7-4196-bfa7-b474365da6c8/WhatsAppImage20240428at125445_21f13c27.jpg" alt="" className="img" />
        </Box>
        </>

    )
}

export default Preloader3