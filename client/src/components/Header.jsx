import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import logo from "../images/fitterLogo.png";
import styled from '@emotion/styled';

function Header(){
    const StyledButton = styled(Button)`
        margin-right: 20px;
        font-size: 1em;
        color: black;
        font-weight: bold;
        text-transform: none;
        @media (max-width: 450px){
            margin-right:0;
        }
    `;
    const navItems = [{
        name: "Login",
        link: "login"
    },{
        name: "About",
        link: "about"
    }];
    return (
        <AppBar position = "static" sx = {{bgcolor: 'white', height: '72.25px'}}>
            <Toolbar>
                <IconButton sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <Link to="/">
                        <img src = {logo} width = "100px" alt = "Fitter Logo"/>
                    </Link>
                </IconButton>
                <Box sx={{ ml: 'auto' }}>
                    {navItems.map((item)=>(
                        <StyledButton key = {item}>
                            <Link to = {item.link} style={{textDecoration: 'none', color: 'inherit', fontFamily: 'Poppins'}}>{item.name}</Link>
                        </StyledButton>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;