import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export const Login = () => {

    const paperStyle = {padding:20, height:'70vh', width:280, margin:"20px auto"}
    const btnStyle = {margin: '8px 0'}
    const avatarStyle ={backgroundColor:'blue'}

  return (
    <Grid> 
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}><LockPersonOutlinedIcon></LockPersonOutlinedIcon></Avatar>
                <h2>Sign In</h2>
            </Grid>

           <pre><TextField label='Username' placeholder='Enter Username' fullWidth required /> </pre>
            <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required /> 
            <FormControlLabel control={<Checkbox />} label="Remember Me" />

            <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign In </Button>

            <Typography> 
            <Link href="#"> Forgot Password? </Link>
        </Typography>

        <Typography> Do you have an account?
            <Link href="#"> SignUp </Link>
        </Typography>


        </Paper>


       


    </Grid>
  )
}

export default Login
