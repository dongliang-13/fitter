import { Box, Grid, TextField, Button, InputAdornment, Typography, FormHelperText, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneInput from "./PhoneInput";
import React from 'react';
import UsFlag from '../images/usFlag.svg';
import { Link } from 'react-router-dom';

function LoginForm(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box
          sx={{
            boxSizing:'border-box',
            border: 1,
            borderColor: "grey.400",
            borderRadius: 2,
            bgcolor: "white",
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent: 'center',
            px: 7,
            width: {laptop:'85%', mobile:'50%'},
            maxHeight: '80%',
            py: '2.5em'
          }}>
            <Typography
                variant="h2"
                sx={{
                    fontSize: 30,
                    fontWeight: "bold", 
                    textAlign: "left", 
                    marginTop: 1,
                    marginBottom: 2,
                    width:'100%',
                }}>
                Sign up
            </Typography>
            <form>
                <Grid container spacing = {3}>
                    <Grid item mobile={6}>
                        <TextField label="First Name" variant="outlined" type="text" sx={{'& .MuiOutlinedInput-root': { borderRadius: '25px' }}} required fullWidth/>
                    </Grid>
                    <Grid item mobile={6}>
                        <TextField label="Last Name" variant="outlined" type="text" sx={{'& .MuiOutlinedInput-root': { borderRadius: '25px' }}} required fullWidth/>
                    </Grid>
                    <Grid item mobile={12}>
                        <TextField label="Email" variant="outlined" type="email" sx={{'& .MuiOutlinedInput-root': { borderRadius: '25px' }}} required fullWidth/>
                    </Grid>
                    <Grid item mobile={12}>
                        <TextField label="Phone Number" 
                            InputProps={{ 
                                inputComponent: PhoneInput, 
                                startAdornment: <InputAdornment position="start">
                                    <IconButton sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                                        <img src = {UsFlag} width="20px" alt = "us"/>
                                    </IconButton>
                                    <Typography variant = 'p'>+1</Typography>
                                </InputAdornment>,
                            }}
                            variant="outlined"
                            required
                            fullWidth
                            sx={{'& .MuiOutlinedInput-root': { borderRadius: '25px' }}}
                            />
                    </Grid>
                    <Grid item mobile={12}>
                        <TextField 
                            label="Password" 
                            variant="outlined" 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Typography variant = "p" sx = {{fontSize:"15px",  }}>{showPassword ? 'hide' : 'unhide'}</Typography>
                                        <IconButton onClick = {handleClickShowPassword} edge = 'end' sx = {{mr:"10px"}}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            type={showPassword?"text":"password"}
                            sx={{'& .MuiOutlinedInput-root': { borderRadius: '25px' }}} 
                            required 
                            fullWidth/>
                        <FormHelperText sx = {{marginLeft:0}}>Use 8 or more characters</FormHelperText>
                    </Grid>
                    <Grid item mobile = {12} sx = {{justifyContent:"center"}}>
                        <Button 
                            type = "submit" 
                            variant = "contained" 
                            sx = {{ borderRadius: '1em', px:'1em', py:'0.5em', marginRight:'0.5em', textTransform: "none"}}>
                            Sign up
                        </Button>
                        <Typography variant = "p" sx = {{fontSize:"0.75em", fontFamily:"Poppins"}}>
                            Already have an account? 
                            <Link to="/login" style={{ color: 'inherit', marginLeft:'0.5em'}}>Log in</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default LoginForm;