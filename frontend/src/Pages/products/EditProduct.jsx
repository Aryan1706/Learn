import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px ",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



export default function EditProduct(props) {
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState(0)
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")
//   const prodCollectionRef = collection(db,"products")

  useEffect(()=>{
    console.log("FID: "+ formid);
    setName(formid.name);
    setUsername(formid.username);
    setEmail(formid.email);
    setAddress(formid.address);
    setPhone(formid.phone)
},[])

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

  const editProduct = (id,name,username,email,address,phone) =>{
    const data = {
      id: id,
      name: name,
      username:username,
      email:email,
      address:address,
      phone:phone
    };
  
    setFormid(data);
    handleEditOpen();
  
  }

  return (
    <div>
      <EditIcon
        style={{
          fontSize: "20px",
          color: "blue",
          cursor: "pointer",
        }}
        className="cursor-pointer"
         onClick={() => editProduct(props.id,props.name,props.username,props.email,props.address,props.phone)}
      />
      <Modal
        open={editopen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            Edit Product
            <IconButton
              style={{ float: "right", color: "black" }}
              onClick={handleEditClose}
            >
              <CloseIcon />
            </IconButton>
          </Typography>

          <Grid container rowSpacing={3} spacing={3}>
            <Grid item xs={12}>
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
                id="username"
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
                id="email"
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
                id="address"
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
                id="phone"
                label="BV"
                fullWidth
                value = {phone}
                onChange = {handlePhoneChange}
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                <Button variant="contained">
                  {" "}
                  {/* onClick={createProduct}*/}
                  Update Product
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
