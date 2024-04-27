"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
// import MenuHover from './MenuHover'
import { categories } from './Navbar'
// import MenuHover from './MenuHover'
import { useRouter } from 'next/navigation'





const NavButtom = () => {
const router = useRouter()
  return (
    <Box
        className=' wrap  space-evenly'
        sx={{
            flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
            justifyContent:'flex-end',
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none ' href={`/collection/products`}>
                    <Typography  component='h1' sx={{width:'max-content',fontWeight:500,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link className='black decor-none ' href={`/`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.76em',sm:'.95em'}}}>
Home
</Typography>
</Link>
<Link className='black decor-none ' href={`/about`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.76em',sm:'.95em'}}}>
About Us
</Typography>
</Link>
<Link 
onClick={()=>router.push('/#contactsection')}
className='black decor-none ' href={`/#contactsection`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.76em',sm:'.95em'}}}>
Reach Us
</Typography>
</Link>
<Link className='black decor-none ' href={`/portfolio`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.76em',sm:'.95em'}}}>
Our Projects
</Typography>

</Link>



                {/* <Link className='black decor-none ' href={`/birds/products`}>

                <Typography 
      className=' cursor center flex gap1 black decor-none '
        id="button"
        component='h1' sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        
        fontWeight:500,fontSize:{xs:'.6em',sm:'.75em'}}}>
     Birds
   </Typography>
   </Link> */}
           

            {/* { [
    {cate:"Categories",subCate:catsSubcategories,img:`https://th.bing.com/th/id/R.1776ae53615a64b359d8d65cf5eca544?rik=WKeDBh1pbwPftA&riu=http%3a%2f%2fwww.kmart.com.au%2fwcsstore%2fKmart%2fimages%2fespots%2fpets-beds-050418-tall-banner.jpg&ehk=fwMSwpMwGOLad6eRmrG%2bT48oAdH2G7Y8Mm2thOjl3Zk%3d&risl=&pid=ImgRaw&r=0`},
    // {cate:"Dogs",subCate:dogsSubcategories,img:`https://mypetguru.com/imgs/uploads/toy-for-dog.jpg`},
    // {cate:"Offers",subCate:offersSubcategories,img:'https://i.pinimg.com/originals/bf/cb/59/bfcb59f20bddc43101e39de2cc142f7e.jpg'}
].map(i => {
                // return <Link className='clr decor-none ' key={i} href={`/${i.replace(/ /g, '-').toLocaleLowerCase()}/products`}>
                //     <Typography  component='h1' sx={{width:'max-content',fontWeight:500,fontSize:{xs:'.6em',sm:'.75em'}}}>                    
                //     {i}
                //     </Typography>
                // </Link>
                return  <MenuHover img={i.img} key={i.cate} category={i.cate} subcategories={i.subCate}/>
            })} */}


        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavButtom