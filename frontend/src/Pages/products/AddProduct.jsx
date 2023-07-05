import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px ",
  borderRadius:"10px",
  boxShadow: 24,
  p: 4,
};

export default function AddProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //Learning Purpose
  
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState(0)
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")

  const handleNameChange = (event)=>{
    setName(event.target.value);
}

const handleUsernameChange = (event)=>{
    setUsername(event.target.value);
}

const handleEmailChange = (event)=>{
    setEmail(event.target.value);
}

const handleAddressChange = (event)=>{
    setAddress(event.target.value);
}

const handlePhoneChange = (event)=>{
    setPhone(event.target.value);
}

/*  const createProduct = async()=>{

    await addProduct(prodCollectionRef,{
        name:name,
        username:username,
        email:email,
        address : address,
        phone : phone
        //date: String(new Date())
    });

    getProducts();
    closeEvent();
    Swal.fire("Submitted!","Your File has been submitted","success")
  }*/

  

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        endIcon={<AddCircleIcon />}
      >
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
            <Typography variant="h6" gutterBottom>
              Payment method
              <IconButton style={{ float:"right", color:"black" }} onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
            </Typography>

            <Grid container  rowSpacing={3}  spacing={3}>
              <Grid item xs={12} >
                <TextField
                  required
                  id="name"
                  label="Name"
                  fullWidth
                  value = {name}
                  onChange = {handleNameChange}
                  autoComplete="cc-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="packsize"
                  label="Pack Size"
                  fullWidth
                  value = {username}
                  onChange = {handleUsernameChange}
                  autoComplete="cc-number"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="price"
                  label="price"
                  fullWidth
                value = {email}
                onChange = {handleEmailChange}
                  autoComplete="cc-exp"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="dp"
                  label="DP"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  value = {address}
                  onChange = {handleAddressChange}
                  autoComplete="cc-csc"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="bv"
                  label="BV"
                  fullWidth
                  value = {phone}
                  onChange = {handlePhoneChange}
                  autoComplete="cc-csc"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} >
                <Typography align="center">
                <Button  variant="contained"> {/* onClick={createProduct}*/}
                  Add Product
                </Button>
                </Typography>
              </Grid>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}
