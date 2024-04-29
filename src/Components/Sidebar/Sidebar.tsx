"use client";
import {useContext} from 'react';
import {Drawer,List,Divider,ListItem,ListItemButton,ListItemText,ListItemIcon,Box, Typography, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import {IoShirtOutline,IoShirtSharp} from 'react-icons/io5';
import { IconButton } from '@mui/material';

import { useRouter } from 'next/navigation';
import {AiOutlineArrowUp} from 'react-icons/ai';

import { DrawerContext } from '@/context/Contexts';
import {GrFormClose} from 'react-icons/gr'
// import SMicons from '../SMicons/SMicons';
// import { catsSubcategories, dogsSubcategories, offersSubcategories } from '../Navbar/NavButtom';
import NestedAccordion from './NestedAccordion';


export default function TemporaryDrawer({cates}:{cates:string[] | undefined}) {
 
  const {open, setOpen} = useContext(DrawerContext);
  const router = useRouter();
  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const Lista = () => (
    <Box
      sx={{ minWidth:{xs:'270px'},  width:  {xs:'100%',sm:'350px',md:'400px'},py:1 }}
      role="presentation"
      // onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box className='flex justify-between items-center '
      sx={{margin:'0 .5em',borderBottom:'1px solid #00000040',    justifyContent: 'flex-end'}}
      
      >
        <Box>
          <Typography sx={{fontWeight:800}}>
            Sidebar Menu
          </Typography>
        </Box>

              <IconButton 
        
        onClick={toggleDrawer(false)}>
                        <GrFormClose
                                color='red'
                                />
                        </IconButton>
                     

                                </Box>
      <List>
      <ListItem
          sx={{fontWeight:600}}

          onClick={()=>{router.push(`/`); toggleDrawer(false)}}
           disablePadding>
              <ListItemButton sx={{py:1.5}} >
            
                  <Typography className='black' sx={{fontWeight:600}}>
             Home
            </Typography>
            </ListItemButton>
  
          <Divider></Divider>
          </ListItem> 
          <ListItem
          sx={{fontWeight:600}}

          onClick={()=>{router.push(`/#contactsection`); toggleDrawer(false)}}
           disablePadding>
              <ListItemButton sx={{py:1.5}} >
              <a
              
              
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer"
              className='decor-none black'
              target='_blank' >


                  <Typography sx={{fontWeight:600}}>
             Contact Us
            </Typography>
              </a>
            </ListItemButton>
  
          <Divider></Divider>
          </ListItem> 
      <ListItem
          sx={{fontWeight:600}}

          onClick={()=>{router.push(`/register`); toggleDrawer(false)}}
           disablePadding>
              <ListItemButton sx={{py:1.5}} >
            
                  <Typography className='black' sx={{fontWeight:600}}>
                  Register now
            </Typography>
            </ListItemButton>
  
          <Divider></Divider>
          </ListItem> 

          {/* <ListItem
          sx={{fontWeight:600}}

          onClick={()=>{router.push(`/about`); toggleDrawer(false)}}
           disablePadding>
              <ListItemButton sx={{py:1}} >
            
                  <Typography sx={{fontWeight:600}}>
             About
            </Typography>
            </ListItemButton>
  

          </ListItem> */}

                  {/* <Accordion sx={{border:'none',boxShadow:'none',}}>
            
                  <AccordionSummary
          expandIcon={<AiOutlineArrowUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Typography sx={{fontWeight:600}}>
             Dogs
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List
  

        
           disablePadding>
<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/dogs/products`)}}

>


  <ListItemButton sx={{py:1}} >
            <Typography sx={{fontWeight:300}}>
        View Dog Collections
      </Typography>
      </ListItemButton>
</ListItem>

{dogsSubcategories.map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

  onClick={()=>
    {setOpen(false);
    router.push(`/materials/products?type=${i.replace(/ /g, '-').toLocaleLowerCase()}`)}}

key={i}>

  
    <ListItemButton sx={{py:1}} >
                  <Typography sx={{fontWeight:300}}>
              -{i}
            </Typography>
            </ListItemButton>
</ListItem>
            
            })}
          </List>


        </AccordionDetails>
      </Accordion> */}

            {/* <NestedAccordion toggleDrawer={setOpen}/> */}

      {/* <Accordion sx={{border:'none',boxShadow:'none',}}>
            
            <AccordionSummary
    expandIcon={<AiOutlineArrowUp />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
 <Typography sx={{fontWeight:600}}>
Cats
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List
     disablePadding>

<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/cats/products`)}}>
  <ListItemButton sx={{py:1}} >
            <Typography sx={{fontWeight:300}}>
        -Browse Cat Collection
      </Typography>
      </ListItemButton>
</ListItem>
{catsSubcategories.map(i=>{   return  <Accordion sx={{border:'none',boxShadow:'none',}}>
            
  <AccordionSummary
expandIcon={<AiOutlineArrowUp />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography sx={{fontWeight:600}}>
Cats
</Typography>
</AccordionSummary>
<AccordionDetails>
  abc
</AccordionDetails>
  </Accordion>



      
      })}
    </List>


  </AccordionDetails>
</Accordion> */}



{/* <Accordion sx={{border:'none',boxShadow:'none',}}>
            
            <AccordionSummary
    expandIcon={<AiOutlineArrowUp />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
 <Typography sx={{fontWeight:600}}>
Offers
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List


  
     disablePadding>

<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/offers/products`)}}

>


  <ListItemButton sx={{py:1}} >
            <Typography sx={{fontWeight:300}}>
        Browse Offers
      </Typography>
      </ListItemButton>
</ListItem>
{offersSubcategories.map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/offers/products?type=${i.replace(/ /g, '-').toLocaleLowerCase()}`)}}

key={i}>


  <ListItemButton sx={{py:1}} >
            <Typography sx={{fontWeight:300}}>
        -{i}
      </Typography>
      </ListItemButton>
</ListItem>
      
      })}
    </List>


  </AccordionDetails>
</Accordion> */}


   
      </List>
    </Box>
  );

  return (
    <div>

          <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer(false)}
          >

  <Lista/>

      
      

          </Drawer>
    </div>
  );
}