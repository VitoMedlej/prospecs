"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiShoppingCart} from 'react-icons/ci'

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';



export const categories = [
    'Home',
    'About',
    'Contact',
    'Portfolio'
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('sgh2j40-tlsit') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <>
     <Box
     id='navy'
    className='center relative auto   bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{

                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
               
            <Toolbar
     id='navy3'

    className='center relative  flex  w100  auto'

                sx={{
                
                background:'white',
                    maxWidth:'xl',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box
    sx={{
    mx: {
        sm: '1em'
    },
    width:{xs:'90px',sm: '110px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/5aa43a6f-929b-4827-982c-b418111f0ce1/logo2.PNG`}
        alt="design compas  logo"/>
</Box>

</Link>
                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'none'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
{/*                              
                             <IconButton
                            onClick={() => router.push('/')}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <AiOutlineHome color='black'/>
                        </IconButton> */}

                        <Box sx={{display:{xs:'flex',md:'none'}}}>
                            <Btn 
                            onClick={()=>router.push('/apply')}
                            sx={{fontWeight:'600',mr:1}}>
                                Apply
                            </Btn>
                        </Box>
                      
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>
<NavButtom/>

  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
 {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}

                  



                            {/* <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                            // margin: '0.1em',
                         
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton> */}
                    
                    </Box>

                </Box>
           
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}