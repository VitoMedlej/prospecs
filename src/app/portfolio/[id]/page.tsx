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
    {imgs:[
        `https://ucarecdn.com/9ff24220-cdfb-406b-8e1a-855d120d1025/photo_5827996069638816596_y.jpg`,
        'https://ucarecdn.com/7361c401-3e63-4d96-8edf-434e298e5b85/2c55883a716d4c9fa5b74b2460008038.jpg',
   
    'https://ucarecdn.com/936f2065-6ac8-46c6-995f-9e76fb7d68fc/5a92c72d878446bf94769e4185f60834.jpg',
     `https://ucarecdn.com/5751be25-07bc-4484-ba60-83e61287e464/4fe89e536ab44aaeafeb99e021c65a1c.jpg`,
     `https://ucarecdn.com/00ec514e-e380-48a4-8d5f-d26cf47a103f/39a2344382f747afbf2a2cc7d2b8af32.jpg`
 ],
 id:'UIn2j41',
 vids: [
    `https://res.cloudinary.com/dwcu3wcol/video/upload/v1704962911/IMG_1279_qszpvj.mp4`,
    `https://res.cloudinary.com/dwcu3wcol/video/upload/v1704962881/IMG_1256_r0rm1b.mp4`
 ]
},
 {
    id:'42NC25'
,
imgs: [
    "https://ucarecdn.com/e25255f2-b1cd-4d4d-8f5a-cb816095b223/photo_5825806679994910491_w.jpg",
    "https://ucarecdn.com/e0032cb7-dc95-4a04-8685-b33cd09f8073/photo_5825806679994910494_w.jpg",
    "https://ucarecdn.com/e01e152c-57ad-4a97-9ecd-b721289b35f6/photo_5825806679994910496_w1.jpg",
    "https://ucarecdn.com/9c7381e2-a997-4e04-9c59-72997e6bb7cb/photo_5825806679994910486_w.jpg",
    "https://ucarecdn.com/9d841f89-41eb-4af5-88c5-02faded00bff/photo_5825806679994910487_y.jpg",
    `https://ucarecdn.com/ea83d135-92da-41b3-8cf7-01db0249d70e/photo_5825806679994910490_w1.jpg`,
    `https://ucarecdn.com/3eba6a1f-abc9-459f-87ac-4e7d3d657110/photo_5825806679994910489_w1.jpg`,
    `https://ucarecdn.com/44134e95-4e13-4d3f-9260-c1f146ba7f86/photo_5825806679994910493_w.jpg`,
    `https://ucarecdn.com/e9b73a64-10a1-4560-8cf9-48805514edea/photo_5825806679994910492_w1.jpg`,
    `https://ucarecdn.com/a5783cba-5d6a-48d1-bd2f-745fde1b7c66/photo_5825806679994910495_w1.jpg`,
    `https://ucarecdn.com/fae27be1-970c-4a04-a1c4-ccec5f0f9beb/photo_5825806679994910489_w.jpg`,
    `https://ucarecdn.com/08193e32-4f01-40a5-a70c-c98974ea0c5e/photo_5825806679994910488_w.jpg`,
    `https://ucarecdn.com/3829a183-8ce0-4c0e-9d10-2136b0cf5668/photo_5825806679994910485_w.jpg`,
    `https://ucarecdn.com/e8245b6f-8bc9-4704-98fd-0fbc8f1a42b6/photo_5825806679994910484_w.jpg`,
    `https://ucarecdn.com/525987cf-f7f0-49c7-8144-7c6d17b5f72b/photo_5767334647334812873_y.jpg`,
`https://ucarecdn.com/3fec16d9-a019-47ef-a9ee-842eacb4bfd7/photo_5767334647334812875_y.jpg`,
`https://ucarecdn.com/32071c54-e59c-44db-8418-1463614d357c/photo_5767334647334812876_y.jpg`,
`https://ucarecdn.com/afdb25e9-96ce-48c4-bd3d-78b3d2d11488/photo_5767334647334812872_y.jpg`,
`https://ucarecdn.com/c87f2108-72aa-4986-9529-ce8d97ecd280/photo_5767334647334812878_y.jpg`,
`https://ucarecdn.com/2bfafc54-6832-41a2-81a6-5ee4e26009a4/photo_5767334647334812877_y.jpg`,
`https://ucarecdn.com/c34327f8-110f-432a-b634-c119b95084cb/photo_5767334647334812879_y.jpg`,
`https://ucarecdn.com/7f04cd21-01c3-406d-8dc6-726d3feca09b/photo_5767334647334812874_y.jpg`,

]
 },
 {  id:'Yo6mz2',
    imgs: [
        
        `https://ucarecdn.com/497ea43f-55e8-4c0f-8487-796f6c522128/photo_5816598205687775287_y.jpg`,
       `https://ucarecdn.com/0dd0bd99-80c1-48f3-b49c-82bebb269312/photo_5816598205687775296_y1.jpg`,
       `https://ucarecdn.com/baebf16d-5634-4cfd-b682-fded505a64dc/photo_5816598205687775295_y1.jpg`,
       `https://ucarecdn.com/afc1b8ae-5bc6-4a6e-b00a-ca344c53fc88/photo_5825806679994910470_y.jpg`,
       `https://ucarecdn.com/ffc5a85c-0299-4072-8cc8-6c324e7d7d19/photo_5816598205687775304_y2.jpg`,
       `https://ucarecdn.com/07ed796b-e935-40e8-87ed-20cb912939c4/photo_5825806679994910471_y.jpg`,
       `https://ucarecdn.com/ee3a1daf-09d3-4e82-89eb-04564826db23/photo_5816598205687775306_y1.jpg`,
       `https://ucarecdn.com/1874fb44-f3da-4eb9-9973-30031738e3bb/photo_5816598205687775286_y1.jpg`,
       `https://ucarecdn.com/46314089-c8ee-492b-b965-2c20ca4f3272/photo_5816598205687775298_y1.jpg`,
       `https://ucarecdn.com/e9831b0c-1ab2-4a15-856f-191cbe90090c/photo_5816598205687775303_y1.jpg`,
       `https://ucarecdn.com/58ecc062-d8ef-4204-b4e1-9447e940d542/photo_5816598205687775296_y2.jpg`,
       `https://ucarecdn.com/83d27718-9035-4937-b44c-701a7729ad7e/photo_5816598205687775299_y2.jpg`,
       `https://ucarecdn.com/4bd3e528-8a40-4c82-bb81-188eaebc5ae0/photo_5816598205687775301_y1.jpg`,
       `https://ucarecdn.com/50dee3ef-e603-4499-a445-1be4ce0ed092/photo_5816598205687775299_y1.jpg`,
       `https://ucarecdn.com/43630f4a-c7ea-49e7-aa00-643bb4266084/photo_5816598205687775304_y1.jpg`,
       `https://ucarecdn.com/f183eacc-49fc-4a9d-b9a1-0b67dfedccc0/photo_5816598205687775293_y1.jpg`,
        `https://ucarecdn.com/ec4ded49-f4ba-4e1a-915c-45630cb4552d/photo_5816598205687775297_y1.jpg`,
    ]
 },
 {
    id:'5NX51z',
    imgs:[
        `https://ucarecdn.com/bcbdc85a-a00d-4863-ab98-e50d7190e980/04.jpg`,
        `https://ucarecdn.com/c248ea99-506f-4729-b671-43b2fd9698bf/5.jpg`,
        `https://ucarecdn.com/f36749b5-578f-46b3-97bc-5c7c5dc11ace/03.jpg`,
        `https://ucarecdn.com/53674b2e-9f98-4031-a9b1-6d5de86e2bbd/ssafir1Model2.jpg`,
        `https://ucarecdn.com/f17f3f53-68e2-4e03-9be2-c76e5c5fb11d/photo_5816598205687775364_y.jpg`,
        `https://ucarecdn.com/afe42032-c788-4258-b06f-4b856914367c/photo_5816598205687775368_y.jpg`,
        `https://ucarecdn.com/1776c4e3-b7b2-41ec-a183-5f964e527a41/photo_5816598205687775365_y.jpg`,
            `https://ucarecdn.com/4e55ee16-d575-48f2-8c35-cab758c12312/photo_5816598205687775352_y.jpg`
        ]
 },
 {
    imgs:[
        `https://ucarecdn.com/63a34c76-5b69-47f8-8142-269449b7ac63/last.jpg`,
        'https://ucarecdn.com/522f84c8-2d57-4dab-bc54-1e2fb01953b7/photo_5832586041058509672_y1.jpg',
        `https://ucarecdn.com/3cd26e06-15a1-40d3-9bc1-f2c83940dfa7/photo_5832586041058509675_y.jpg`,
        `https://ucarecdn.com/b6bc2555-d25f-49ab-a69c-923b65eae400/photo_5832586041058509674_y.jpg`,
        `https://ucarecdn.com/2b42134e-9c9d-472a-9aa6-0f1295ef6d29/photo_5832586041058509670_x.jpg`,    
        `https://ucarecdn.com/ee4d8ba6-a826-4ed4-acf0-4d37eca6e9b4/first.jpg`],
    id:'NC2zm2'
  },
  {
    id:`VBz2zs`,
    imgs: [`https://ucarecdn.com/a7a2e96e-d937-483a-bea7-308678139186/photo_5832586041058509704_y.jpg`,
`https://ucarecdn.com/fb0d0f3c-9fec-464e-83f1-cec6970c9521/photo_5832586041058509705_y.jpg`,
`https://ucarecdn.com/e44ebc20-1a19-487b-b1d4-530e8f5b334d/photo_5832586041058509708_y.jpg`,
`https://ucarecdn.com/f606419f-1e2a-439d-b20f-da0c26503024/photo_5832586041058509706_y.jpg`,
`https://ucarecdn.com/654661f9-3266-4f96-862a-90326082879c/photo_5832586041058509707_y.jpg`,
`https://ucarecdn.com/df471fa0-2a5d-44cf-bc83-f6ac189bd04e/photo_5832586041058509703_y.jpg`,
]
  },
 {
    id:'Fnz35o',
    vids:
    [

        'https://res.cloudinary.com/dwcu3wcol/video/upload/v1704875266/document_5830363266177569280_mhwztb.mp4',
    ],
    imgs:[
        `https://ucarecdn.com/70b85b33-019e-41df-8603-420f59557a30/photo_5820989676603948867_y.jpg`,
        `https://ucarecdn.com/6a2342dc-8c61-4804-a413-5213418af114/photo_5820989676603948868_y.jpg`,
        `https://ucarecdn.com/929ddc43-e60f-47b2-98e7-17b2d9adcb00/photo_5820989676603948863_y.jpg`,
        `https://ucarecdn.com/b7bf5dde-f9c4-4eb5-85a5-b555021a2bdf/photo_5820989676603948866_y.jpg`,
        `https://ucarecdn.com/425a29dd-786f-4359-8a64-f72e8a2ee142/photo_5958587234628255285_y.jpg`,
        `https://ucarecdn.com/0392ce20-01da-4c3d-8b2a-602d00a9cadf/photo_5820989676603948872_y.jpg`,
        `https://ucarecdn.com/e18317d6-e3ad-42e2-9f0d-f70f4fff2d49/photo_5820989676603948864_y.jpg`,
        `https://ucarecdn.com/2f46459f-db39-4331-a862-ace25d8457ae/photo_5820989676603948865_y.jpg`,
    ]
 }
]
const Index = () => {
  const router = useRouter();
const {id} = useParams()
const searchParams = useSearchParams()
const title = searchParams.get('title')
 const [imgs,setImgs] = useState<string[]>([]);
 const [videos,setVid] = useState<string[]>([]);


 useEffect(() => {
    const object = projects.find(obj => obj?.id === id);
    if (!object || !object?.imgs) return;

    setImgs(object?.imgs);
    object?.vids && setVid(object?.vids);
}, [ id]);

  return (
    <Container maxWidth='lg'>
            <Typography className='center flex auto text-center items-center' sx={{pt:6,pb:4,fontWeight:600,fontSize:'2.45em',maxWidth:'700px'}}>
           {`${title || 'Project Name'}`?.replace(/-/g,' ')}
            </Typography>
        <Box sx={{gap:'.5em'}} className='flex wrap row center   auto'>
        {
            
            
                videos  && videos?.length > 0 &&   videos.map(video=>{

                    return <Box sx={{maxHeight:{xs:'400px',sm:'500px'},maxWidth:{xs:'100%',sm:'500px'}}} key={video}>

          <video key={video} autoPlay width="100%" height="100%" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                    </Box>
            })
        }
        
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