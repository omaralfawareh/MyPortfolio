import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Flex, } from 'antd'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Contact (){
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  function handleClick() {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2rq4fhi ', 'template_mfctzvy', form.current, 'ecOwUU7qwwkr2wMe-')
      .then((result) => {
        setSent(true);
        handleClick()
      }, (error) => {
          console.log(error.text);
          setSent(false);
          handleClick();
      });
  };
  return (
    <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ border:'red solid 1px'}}
    >   
    <form ref={form} >
        <Flex className='about' align='left' gap={'large'} vertical style={{ border:'white solid 1px' , height:'100vh', padding:'1rem'}}>
            <h1 style={{textAlign:'left'}}>Get In Touch</h1>
            <TextField InputLabelProps={{ style: { color: '#fff' }, }} name='user_name' id="outlined-basic" label="Name" variant="outlined" style={{width:'100%'}}/>
            <TextField InputLabelProps={{ style: { color: '#fff' }, }} name='user_email' id="outlined-basic" label="Email" variant="outlined" style={{width:'100%'}}/>
            <TextField InputLabelProps={{ style: { color: '#fff' }, }} name='message' id="outlined-basic"  rows={4} multiline label="Message" variant="outlined" style={{width:'100%'}}/>
            <Button variant="contained" onClick={sendEmail}  className='button' style={{ color: 'white', backgroundColor: '#101314', fontFamily: 'Montserrat' }}>
              <span style={{fontWeight:'bold'}}>Send Message</span>
            </Button>
            
        </Flex>
      </form>
      {sent && <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Success"
        action={action}
      />
      }
      {!sent && <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Failed to Send"
        action={action}
      />}
     </motion.div>   
  )
}

export default Contact