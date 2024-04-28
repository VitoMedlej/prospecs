"use client"
import React from 'react'
import { Box,  Container, Divider, Grid, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  const textsArray = [
    {
      id: 1,
      title: 'Empowering Athletes',
      desc: 'At Prospecs, we recognize that athletic excellence requires more than just talent—it requires continuous evolution and innovation. That\'s why we\'ve developed a comprehensive suite of tools and resources aimed at empowering athletes at every level.'
     , img : `https://th.bing.com/th/id/R.5a9aa377544398c8218bff1c28c8c6ca?rik=rGD3PCubZjBHJA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fChicago-Bulls-Backgrounds-HD.jpg&ehk=dJG45LDtUGhrEneC%2bIdOwfXOik%2bY6bMZfwVlGHmKzCQ%3d&risl=&pid=ImgRaw&r=0`
    },
    {
      id: 2,
      title: 'Cutting-Edge Capacity Development Trainings',
      desc: 'Our Capacity Development Trainings are designed to exceed traditional methods, offering dynamic programs tailored to unlock each athlete\'s full potential. From personalized coaching to specialized workshops, we provide the support and guidance needed to cultivate skills, confidence, and resilience.'
      ,img: `https://th.bing.com/th/id/R.1eb9d75eda094c030c7a4137ca84a289?rik=jt5uh4P5zeQzFw&pid=ImgRaw&r=0`
    },
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

    <Container maxWidth='lg'   sx={{mb:{xs:3,sm:6,md:8},mt:{xs:4,sm:6,md:8}}}>
      <Box sx={{width:'100px',height:'100px'}} className='auto'>
        <img src="https://ucarecdn.com/5aa43a6f-929b-4827-982c-b418111f0ce1/logo2.PNG" alt="" className="img" />
      </Box>
      <Typography
      component='h1'
      sx={{fontSize:{xs:'2em',sm:'2.8em'},maxWidth:'800px',fontWeight:900}} className='center text-center auto '>
     Prospecs: Revolutionizing Athletic Excellence
      </Typography>
      <Typography sx={{width:'100%',maxWidth:'800px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',pt:1.5}} className='center text-center auto'>
   {`   Welcome to Prospecs, where we're committed to pushing the boundaries of athletic achievement through innovative Capacity Development Trainings, Data, & Technology.`}
        </Typography>
        <Btn 
        onClick={()=>router.push('/apply')}
        
        sx={{margin:'1em auto'}}>
          Apply Now
        </Btn>
    </Container>

    <Container  className='wrap row  center auto flex' 
    sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:6,sm:12},display:'flex'}}>
        {
      [
        {
          title: 'Tailored Support',
          text: "Personalized coaching and workshops tailored to your journey.",
          icon: 'https://www.svgrepo.com/show/494431/handshake-deal.svg'
        },
        {
          title: 'Empowering Mission',
          text: "Elevating sports experiences for every athlete.",
          icon: 'https://www.svgrepo.com/show/409793/tools.svg'
        },
        {
          title: 'Innovative Solutions',
          text: "Driving change and excellence in sports.",
          icon: 'https://www.svgrepo.com/show/476047/checklist.svg'
        }
    ].map(i=>{
          return <Box key={i.title} sx={{mx:2,my:1}} className='flex col items-center center'>
              <Box sx={{width:'20px'}}>
                <img src={i.icon} alt="" className="img" />
              </Box>
              <Box >
              <Typography className='center text-center'  sx={{maxWidth:'400px',fontSize:{xs:'.99em',sm:'1.1em'},fontWeight:500}}>
              {i.title}
          </Typography>
          <Typography className='center text-center' sx={{color:'#4d555e',fontSize:{xs:'.75em',sm:'.8em'},pb:.65,maxWidth:'350px'}}>
          {i.text}
          </Typography>
              </Box>
          </Box>
        })
        }
    </Container>
 
      <Container id='serv'    sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>

      {textsArray.map(i=>{
        return <Box key={i.id} className='flex row wrap' 
        sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',md:'48%'}}}>

  
      
          <Typography  
          component='h1'
          sx={{maxWidth:{xs:'100%',lg:'400px'},fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            {i.title}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:{md:'350px'}}}>
            {i.desc}
          </Typography>
          </Box>
          <Box sx={{height:{xs:'250px',sm:'300px'},mt:.5,borderRadius:'6px', width:{xs:'100%',md:'48%'}}}>
            <img style={{borderRadius:'6px'}} src={i.img} alt="" className="img" />
          </Box>
        </Box>
      })}
      </Container>



    <Grid  sx={{width:'100%',py:6}} container>
    <Grid  maxWidth='lg' item xs={12} sm={6}>
      <Box sx={{height:'500px',maxWidth:'450px'}} className='auto'>
        <img src="https://th.bing.com/th/id/R.f22d5101ac479a3488dcc0d36dad9d91?rik=1Bu8ZJBfuz52Cw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2faf%2fBasketball_game.jpg&ehk=KvGNkeegVRpNa6HtsO%2fjVrPoR5L5OQF%2fFxDUt3n7p7U%3d&risl=&pid=ImgRaw&r=0" alt="" className="img" />
      </Box>
    </Grid>
    <Grid maxWidth='lg' item xs={12} sm={6}>
    <Container  className='wrap col   auto flex' sx={{alignItems:'left',px:{sm:1},pt:{xs:2,sm:4},display:'flex'}}>
      
        <Typography component='h1' sx={{width:'100%',maxWidth:'500px',fontSize:{xs:'2em',sm:'3em'},fontWeight:900}} className=''>
        Join the Prospecs Team Today
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
    {`    Join Prospecs today for personalized support, innovative solutions, and a community dedicated to your success. Whether you're a seasoned athlete or just starting out, we're here to empower you. Don't wait, join us now!`}
        </Typography>
        <Btn 
        onClick={()=>router.push('/apply')}
        className='color' sx={{width:'100px',color:'black',mt:2,px:0}}>
          Join Us
        </Btn>
    </Container>

    </Grid>
   
   
    </Grid>
 




      <Box/>

        
      {/* <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
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
      </Container> */}
        
          {/* <Divider light></Divider> */}
      
      
      {/* <Container  id='gallery' className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
      <Typography  className='center text-center' sx={{mt:4,width:'100%',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            Our Gallery
            </Typography>
         
          <a className='center text-center auto' target='_blank' rel='noreferrer' href={`
https://www.instagram.com/prospecsme/`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='p' sx={{width:'max-content',
mx:'1em',
mb:4,
alignItems: 'center',

fontWeight:400,fontSize:{xs:'.76em',sm:'.95em'}}}>
@prospecsme
</Typography>
  </a>
        <Box className='flex row wrap' sx={{justifyContent:'space-between'}}>
            {['https://ucarecdn.com/69b0fd55-c09a-47c3-b983-a7a0f8c7d464/380886384_18122833480310836_2037527117038793595_n.jpg',
              `https://ucarecdn.com/d6566a9c-1cbf-479a-8c86-161f905e1707/380879015_18122833432310836_7499431899428723809_n.jpg`,
              `https://ucarecdn.com/57923e4b-9c36-4910-9fc9-ee24dbb810ca/380886818_18122833288310836_8033594672296713165_n.jpg`
              ,`https://ucarecdn.com/b4bc45d4-b9d0-4ea0-b732-fe8d512836f0/380939103_18122833258310836_7226978765671778953_n.jpg`,
              `https://ucarecdn.com/1446276a-fe29-45c6-a912-b9dc3c67e4e4/380882960_18122833213310836_9136510878753639112_n.jpg`,
              `https://ucarecdn.com/2ab686b3-3be2-4d57-9ccd-f2f3d84013ba/380889662_18122833006310836_2215207237974251906_n.jpg`
        ].map(i=>{
            return <Box key={i} sx={{width:{xs:'33%'}}}>
              <Box sx={{width:'100%'}}>
                <img src={`${i}`} alt="" className="img" />
              </Box>
              <Box>
          
              </Box>
            </Box>
          })}
        </Box>
      </Container> */}
        <ContactSection/>
  </Box>
  )
}

export default PreLoader