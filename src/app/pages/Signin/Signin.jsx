import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ()=>{

    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        navigate("/");
    }
    return(
        <div>
            <Container maxWidth="xs">
                <Box sx={{
                    marginTop:8,
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }} >

                 <Typography variant="h5" >Sign In</Typography>   

                 <Box component="form" onSubmit={handleSubmit} sx={{mt:2, alignSelf:"stretch"}} >    
                <TextField
                    fullWidth
                    margin="normal"
                    name="Email"
                    label="Email ID"
                />

                <TextField
                    fullWidth
                    margin="normal"
                    name="password"
                    label="Password"
                />

                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{
                        mt:3
                    }}

                >
                    SIGN IN
                </Button>
                </Box>
                </Box>
            </Container>
        </div>
    );
};

export default SignIn;