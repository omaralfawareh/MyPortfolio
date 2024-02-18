import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Flex } from "antd";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Contact() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [valid, setValid] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function validate(callback) {
    if (email === "" || name === "" || message === "") {
      setValid(false);
      console.log("Validation failed: Empty fields");
      callback(false);
    } else {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegex)) {
        setValid(true);
        console.log("Validation passed");
        callback(true);
      } else {
        setValid(false);
        console.log("Validation failed: Invalid email format");
        callback(false);
      }
    }
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  function handleClick() {
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
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
    validate((isValid) => {
      console.log(isValid);
      if (isValid) {
        emailjs
          .sendForm(
            "service_2rq4fhi",
            "template_mfctzvy",
            form.current,
            "ecOwUU7qwwkr2wMe-"
          )
          .then(
            (result) => {
              setSent(true);
              handleClick();
            },
            (error) => {
              console.log(error.text);
              setSent(false);
              handleClick();
            }
          );
      } else {
        setValid(false);
        handleClick();
      }
    });
  };
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form className="contact" ref={form}>
        <Flex className="content" align="left" gap={"large"} vertical>
          <h1>Get In Touch</h1>
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={handleName}
            className="input"
            InputLabelProps={{ style: { color: "#fff" } }}
            name="user_name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={handleEmail}
            className="input"
            InputLabelProps={{ style: { color: "#fff" } }}
            name="user_email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{ input: { color: "white" } }}
            onChange={handleMessage}
            className="input"
            InputLabelProps={{ style: { color: "#fff" } }}
            name="message"
            id="outlined-basic"
            rows={4}
            multiline
            label="Message"
            variant="outlined"
          />
          <Button variant="contained" onClick={sendEmail} className="button">
            <span>Send Message</span>
          </Button>
        </Flex>
      </form>
      {sent && valid && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Success"
          action={action}
        />
      )}
      {!sent && valid && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Failed to Send"
          action={action}
        />
      )}
      {!valid && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Improper Inputs"
          action={action}
        />
      )}
    </motion.div>
  );
}

export default Contact;
