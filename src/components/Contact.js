import React from 'react'
import { Flex, } from 'antd'
import { motion } from 'framer-motion'
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
        <Flex align='left' gap={'large'} vertical style={{ border:'white solid 1px' , height:'100vh'}}>
            <h1>Get In Touch</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:'100%'}}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'100%'}}/>
            <TextField id="outlined-basic"  rows={4} multiline label="Message" variant="outlined" style={{width:'100%'}}/>

        </Flex>
     </motion.div>   
  )
}

export default Contact