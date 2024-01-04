"use client"
import { Box, Container, Typography } from '@mui/material'
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper';


const projects = [
    {imgs:['https://ucarecdn.com/7361c401-3e63-4d96-8edf-434e298e5b85/2c55883a716d4c9fa5b74b2460008038.jpg',
   
    'https://ucarecdn.com/936f2065-6ac8-46c6-995f-9e76fb7d68fc/5a92c72d878446bf94769e4185f60834.jpg',
     `https://ucarecdn.com/5751be25-07bc-4484-ba60-83e61287e464/4fe89e536ab44aaeafeb99e021c65a1c.jpg`,
     `https://ucarecdn.com/00ec514e-e380-48a4-8d5f-d26cf47a103f/39a2344382f747afbf2a2cc7d2b8af32.jpg`
 ],
 id:'UIn2j41',

},
 {
    id:'42NC25'
,
imgs: [`https://ucarecdn.com/525987cf-f7f0-49c7-8144-7c6d17b5f72b/photo_5767334647334812873_y.jpg`,
`https://ucarecdn.com/3fec16d9-a019-47ef-a9ee-842eacb4bfd7/photo_5767334647334812875_y.jpg`,
`https://ucarecdn.com/32071c54-e59c-44db-8418-1463614d357c/photo_5767334647334812876_y.jpg`,
`https://ucarecdn.com/afdb25e9-96ce-48c4-bd3d-78b3d2d11488/photo_5767334647334812872_y.jpg`,
`https://ucarecdn.com/c87f2108-72aa-4986-9529-ce8d97ecd280/photo_5767334647334812878_y.jpg`,
`https://ucarecdn.com/2bfafc54-6832-41a2-81a6-5ee4e26009a4/photo_5767334647334812877_y.jpg`,
`https://ucarecdn.com/c34327f8-110f-432a-b634-c119b95084cb/photo_5767334647334812879_y.jpg`,
`https://ucarecdn.com/7f04cd21-01c3-406d-8dc6-726d3feca09b/photo_5767334647334812874_y.jpg`,

]
 }
]
const Index = () => {
  const router = useRouter();
const {id} = useParams()
const searchParams = useSearchParams()
const title = searchParams.get('title')
 const [imgs,setImgs] = useState<string[]>([]);


 useEffect(() => {
    const object = projects.find(obj => obj?.id === id);
    if (!object || !object?.imgs) return;

    setImgs(object?.imgs);
}, [ id]);

  return (
    <Container maxWidth='lg'>
            <Typography className='center flex auto text-center items-center' sx={{pt:6,pb:4,fontWeight:600,fontSize:'2.45em',maxWidth:'700px'}}>
           {`${title || 'Project Name'}`?.replace(/-/g,' ')}
            </Typography>
        <Box sx={{gap:'.5em'}} className='flex wrap row center   auto'>
    
   {imgs.map((item) => {


       return <Box sx={{maxHeight:{xs:'400px',sm:'500px'},maxWidth:{xs:'100%',sm:'500px'}}} key={item}>
        <img src={item} alt="" className="img cover" />
   </Box>
})

}
        </Box>
            {/* <Container>
            <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'auto',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'200px',
          
            margin: '0 auto',
            // height : {xs:'100vh',sm:'650px'},
             
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
    
                {['https://ucarecdn.com/7361c401-3e63-4d96-8edf-434e298e5b85/2c55883a716d4c9fa5b74b2460008038.jpg','https://ucarecdn.com/936f2065-6ac8-46c6-995f-9e76fb7d68fc/5a92c72d878446bf94769e4185f60834.jpg'].map((item) => {
    
                    return <SwiperSlide 
                        // onClick={() => router.push('/')}
                    className='  ' key={item}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            // width:'100%'
                        }}>
                     
                            <img
            
                                className={`img pointer  cover
                                `}
                                // ${item?.className}
                                src={`${item}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
            </Container> */}
    </Container>
  )
}

export default Index