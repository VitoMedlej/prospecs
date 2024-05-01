"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer " style={{color:'black',background:'white'}}>
    <Divider></Divider>
    <div className="container " style={{color:'black',background:'white'}}>
      <Box className="site-footer__top " sx={{
        width:'100%',
        margin:{sm:'0 auto'},
            flexDirection: {xs:'column-reverse',sm:'row-reverse'},
        maxWidth:'1200px'}}>
        <Box className="site-footer__description"
        sx={{
              justifyContent:{sm:'flex-end'},
          display: 'flex'}}
        >
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img contain' src='https://ucarecdn.com/93b9b344-419c-40ac-8b82-75a277432702/logo3.PNG' alt="Prospecs Lebanon Logo" />
            </Link>
          </div>
          {/* <Typography sx={{ fontSize: '.95em',color:"2b2b2b" }}  className='footer-p '>
          At Prospecs, we believe that every space has a story to tell. Our passionate team of designers is dedicated to weaving unique narratives through the art of interior design. With an unwavering commitment to creativity and quality, we turn your vision into reality.
          </Typography> */}
          {/* <SMicons/> */}

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </Box>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          {/* <ul className=' ul-white'>
            <li className='link-title'>Site links</li>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/register">Register</Link></li> 
          </ul> */}
            {/* <li><Link href="/about">About Us</Link></li> */}
            {/* <li><Link href="/contact">Contact Us</Link></li> */}
            {/* <li><Link href="https://www.google.com/maps/place/Design+compass/@33.8884247,35.4809988,17z/data=!3m1!4b1!4m6!3m5!1s0x151f1749ba249eaf:0xc9a67248535dca49!8m2!3d33.8884247!4d35.4809988!16s%2Fg%2F11hxvhzfj_?entry=ttu">Google Maps</Link></li> */}
     
          <ul  className='ul-white' style={{padding:'0 !Important',color:'black'}}>
            <li className='link-title'>Contact</li>
            <li ><Link
            className='flex row gap2'
            href="mailto:info@Prospecs.com">
              
              <Box sx={{opacity:.8, width:'17px',maxWidth:'17px',height:'17px',maxHeight:'17px'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" className="img" />
              </Box>
              Info@Prospecs.me</Link></li>
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a 
            className='flex row gap2'
            
            href="https://www.instagram.com/prospecsme/" target="_blank" rel="noreferrer" >
              
            <Box sx={{opacity:.8, width:'17px',maxWidth:'17px',height:'17px',maxHeight:'17px'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="" className="img" />
              </Box>
              @prospecsme</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer"
            
            className='flex row gap2'
            
            target='_blank' >
              
              <Box sx={{opacity:.8, width:'17px',maxWidth:'17px',height:'17px',maxHeight:'17px'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="" className="img" />
              </Box>
              +{process.env.NEXT_PUBLIC_WA}</a></li>
            {/* <li><a href={`http://tiktok.com/@thePROroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </Box>
    </div>

    <div className="site-footer__bottom " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.onbeirut.com'}`}>@OnBeirut Agency</a></p>
      </div>
    </div>
  </footer>
);


export default Footer

