"use client"
import React from 'react'
import { Box,  Container, Divider, Grid, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  const textsArray = [
    {
      id: 1,
      title: 'Heading explaining the main benefit of your app',
      desc: 'Our supplements are made from only the finest natural ingredients, ensuring that you get the best possible results without any harmful chemicals or additives.'
    },
    {
      id: 2,
      title: 'Purity and Potency',
      desc: 'We carefully select our ingredients for their purity and potency, ensuring that you get the best possible results from our supplements.'
    },
    {
      id: 3,
      title: 'Expertly Formulated',
      desc: 'Our supplements are expertly formulated by our team of experienced professionals, ensuring that you get the best possible results every time.'
    },
    {
      id: 4,
      title: 'Great Value',
      desc: 'Our supplements offer great value for money, providing you with the highest quality ingredients at an affordable price.'
    }
  ];
  
  
  // [{img:'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',category:'Cricut machines'},
  // {img:'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',category:'Customizable Blanks'},
  // {img:'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',category:'Hot offers'} ,
  // {img:'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',category: 'New Arrivals'}  ,
  // {img:'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg',category:'Materials'}  ,
  
  // ]
  // const twinImages =resImages?.categoryImage && resImages?.categoryImage?.length > 1 ? resImages?.categoryImage  :  [{img:'https://ucarecdn.com/e79d337c-b709-4ea4-aec0-6f3403afff1e/WhatsAppImage20230824at191717.jpeg'},{img:'https://ucarecdn.com/3a54db45-c216-4076-996c-3ec4524be8f0/WhatsAppImage20230824at191727.jpeg'}]
  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      {/* <Perks/> */}

    <Container   maxWidth='lg'   sx={{my:{xs:3,sm:6,md:8}}}>
      <Typography sx={{fontSize:{xs:'2em',sm:'3em'},fontWeight:900}} className='center text-center auto '>
      DESIGN COMPASS IS DEFINED BY GREATNESS


      </Typography>
      <Typography sx={{width:'100%',maxWidth:'800px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',pt:1.5}} className='center text-center auto'>
      DesignAgency is an award-winning studio with a talent for envisioning inspired environments and brands. Our exceptional designs are driven by the collaborative spirit of our studio that values the evolution of unique and functional spaces through innovation and creativity. We understand that individual inspiration can only be realized through the power of collaboration.
        </Typography>
    </Container>

 
      <Container sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>

      {textsArray.map(i=>{
        return <Box key={i.id} className='flex row wrap' sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',sm:'48%'}}}>

  
          <Typography  className='color'>
            .0{i.id}
          </Typography>
          <Typography  sx={{maxWidth:'400px',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            {i.title}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'350px'}}>
            {i.desc}
          </Typography>
          </Box>
          <Box sx={{height:{xs:'200px',sm:'300px'},mt:.5,borderRadius:'6px', width:{xs:'100%',sm:'48%'}}}>
            <img style={{borderRadius:'6px'}} src="https://10web-site.ai/25/wp-content/uploads/sites/28/2023/09/recycled-shoe-store-home-about-image_cXRc9c18.webp" alt="" className="img" />
          </Box>
        </Box>
      })}
      </Container>

    <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
        {
        [1,2,3].map(i=>{
          return <Box key={i} sx={{mx:2}} className='flex col items-center center'>
              <Box sx={{width:'20px'}}>
                <img src="https://www.svgrepo.com/show/447781/secure.svg" alt="" className="img" />
              </Box>
              <Box >
              <Typography className='center text-center'  sx={{maxWidth:'400px',fontSize:{xs:'.99em',sm:'1.1em'},fontWeight:500}}>
              Feature One
          </Typography>
          <Typography className='center text-center' sx={{color:'#4d555e',fontSize:{xs:'.75em',sm:'.8em'},pb:.65,maxWidth:'350px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.
          </Typography>
              </Box>
          </Box>
        })
        }
    </Container>

    <Grid  sx={{width:'100%',pt:6}} container>
    <Grid  maxWidth='lg' item xs={12} sm={6}>
      <Box sx={{height:'500px',maxWidth:'450px'}} className='auto'>
        <img src="https://th.bing.com/th/id/R.895c8ea5d0d0dce5e8790c317209e10d?rik=yaI%2fbJaLkYBogw&pid=ImgRaw&r=0" alt="" className="img" />
      </Box>
    </Grid>
    <Grid maxWidth='lg' item xs={12} sm={6}>
    <Container  className='wrap col   auto flex' sx={{alignItems:'left',px:{sm:1},pt:{xs:2,sm:4},display:'flex'}}>
        <Typography sx={{fontWeight:400}} className='color'>
          ABOUT US
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',fontSize:{xs:'2em',sm:'3em'},fontWeight:600}} className=''>
        Welcome to Design Compas
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
        Explore our portfolio and let our work speak for itself. DesignCompass invites you to embark on a journey of transformation, where your spaces become a canvas for creativity and your ideas find a home
        </Typography>
        <Btn v2 className='color' sx={{width:'100px',color:'black',mt:2,px:0}}>
          Learn More
        </Btn>
    </Container>

    </Grid>
   
   
    </Grid>
 




      <Box/>

        
      <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
      <Typography  className='center text-center' sx={{my:4,width:'100%',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            Meet The Team
          </Typography>
        <Box className='flex row wrap' sx={{justifyContent:'space-between'}}>
          {[1,2,3].map(i=>{
            return <Box key={i} sx={{width:{xs:'95%',sm:'32%'}}}>
              <Box sx={{width:'100%'}}>
                <img src="https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" alt="" className="img" />
              </Box>
              <Box>
              <Typography  className='center' sx={{maxWidth:'400px',fontSize:{xs:'.8em',sm:'1em'},fontWeight:300}}>
            David R. Stevenson
          </Typography>
              </Box>
            </Box>
          })}
        </Box>
      </Container>
        
          <Divider light></Divider>
      <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
      <Typography  className='center text-center' sx={{my:4,width:'100%',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            Our Projects
          </Typography>
        <Box className='flex row wrap' sx={{justifyContent:'space-between'}}>
            {['https://ucarecdn.com/f8cec8bd-329e-4619-a3fa-84bc6a7eb976/350174584_772950354335809_1546699321853274506_n1.jpg',
              `https://ucarecdn.com/29e05437-650c-4630-ab22-aef56e7b7b43/346568375_561570792787877_3007785310889235198_n1.jpg`,
              `https://ucarecdn.com/45e7f519-a236-4950-88d2-b20c03f01779/327354731_1382619425823545_3993434233662015758_n.jpg`
              ,`https://ucarecdn.com/918f24a2-67e9-4401-84e7-6bd5580bcf39/326989089_124426176993731_5807831868261554876_n.jpg`,
              `https://ucarecdn.com/4531d712-f11b-48f0-8814-a65d9d662758/326873372_1203331257238341_3929759003780858100_n.jpg`,
              `https://ucarecdn.com/5e6a1c31-0c4b-4d54-88aa-b62e8909268f/310628913_814761196339895_5039299682204342831_n.jpg`
        ].map(i=>{
            return <Box key={i} sx={{my:1.5,width:{xs:'95%',sm:'32%'}}}>
              <Box sx={{width:'100%'}}>
                <img src={`${i}`} alt="" className="img" />
              </Box>
              <Box>
              {/* <Typography  className='center' sx={{maxWidth:'400px',fontSize:{xs:'.8em',sm:'1em'},fontWeight:300}}>
            David R. Stevenson
          </Typography> */}
              </Box>
            </Box>
          })}
        </Box>
      </Container>

        <ContactSection/>
  </Box>
  )
}

export default PreLoader