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
        {img:'https://ucarecdn.com/b65ba785-b4a9-45a7-9d32-42575ffd0939/'},
        {img:'https://ucarecdn.com/99500dfb-94b4-4e31-8e64-ba0651ae42c6/photo_5895299525722096485_w.jpg'},
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
                            ,opacity:.57}} className="absolute">

                            </Box>
                            <Box 
                            className='auto'
                            sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                maxWidth:'750px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography sx={{color:'white',fontSize:{xs:'2.5em',sm:'3.5em',md:'4em',lg:'4.8em'},fontWeight:900}}>
                                Experience the Power of Desgin Compass
                                </Typography>
                                <Typography sx={{color:'white',fontSize:{xs:'.85em',sm:'.89em'},mt:1,maxWidth:'600px'}}>
                                At Design Compass, we believe that every space has a story to tell. Our passionate team of designers is dedicated to weaving unique narratives through the art of interior design
                                </Typography>
                                <Box className="flex">

                                <Btn
                        onClick={() => router.push('/portfolio')}
                                
                                className='bg white borderColor' sx={{mt:3}}>
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