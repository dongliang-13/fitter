import { Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import LoginForm from '../components/SignupForm';
import Dumbell from '../images/dumbell.png'
import styled from '@emotion/styled';

export default function Root(){
    const ContainerStyled = styled(Container)`
        @media (max-width: 1024px){
            height: auto
        }
    `;
    return (
    <ContainerStyled style = {{
        background: `url(${Dumbell}), linear-gradient(to right, rgba(250,146,51,0.43), rgb(250,146,51), rgb(44,95,228))`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: "bottom left, center center",
        backgroundSize: 'calc(20vw + 150px), cover',
        width: '100%', }}
        sx = {{minHeight: {laptop:'calc(100svh - 72.25px)', mobile:'auto'}}}
        maxWidth = {false}>
        <Grid container sx = {{minHeight: {laptop:'calc(100svh - 72.25px)', mobile:'auto'}}}>
            <Grid item mobile={12} laptop={6} style={{padding:'5% 5% 0 5%'}}>
                <Typography variant = "h3" sx = {{fontSize:'2.5em', fontWeight:"1000", marginBottom:"20px"}}>One place for all your fitness journey</Typography>
                <Typography variant = "p" sx = {{fontSize:'1.5em', fontFamily: "Poppins"}}>Track your gym progress and be <br />accountable everyday</Typography>
                <List sx = {{paddingTop:"30px"}}>
                    <ListItem>
                        <ListItemIcon>
                            <CheckIcon sx = {{fontSize:"1.25em"}}/>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{fontFamily:"Poppins", fontSize:"1.25em"}}} primary="Unlimited use forever" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckIcon sx = {{fontSize:"1.25em"}} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{fontFamily:"Poppins", fontSize:"1.25em"}}} primary="Personalized calendar checklist" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckIcon sx = {{fontSize:"1.25em"}} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{sx:{fontFamily:"Poppins", fontSize:"1.25em"}}} primary="Set your gym goals" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item mobile={12} laptop={6} sx = {{ display:'flex', alignItems:'center', justifyContent: 'center'}}>
                <LoginForm />
            </Grid>
        </Grid>
    </ContainerStyled>
    )
}