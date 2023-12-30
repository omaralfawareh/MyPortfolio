import React from 'react'
import { Flex, } from 'antd'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Contact (){
  return (
    <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ border:'red solid 1px'}}
    >   
        <Flex className='about' align='left' gap={'large'} vertical style={{ border:'white solid 1px' , height:'100vh', padding:'1rem'}}>
            <h1 style={{textAlign:'left'}}>Get In Touch</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:'100%'}}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'100%'}}/>
            <TextField id="outlined-basic"  rows={4} multiline label="Message" variant="outlined" style={{width:'100%'}}/>
            <Button variant="contained"  className='button' style={{ color: 'white', backgroundColor: '#101314', fontFamily: 'Montserrat' }}>
              <span style={{fontWeight:'bold'}}>Send Message</span>
            </Button>
            
        </Flex>
     </motion.div>   
  )
}

export default Contact