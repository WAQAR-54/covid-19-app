import React from 'react';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import {  Typography, Paper,} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    "paper": {
        padding: '15px',
        textAlign: "center",
        //marginBottom:'10px',
        
        margin: '50px'
        // border: "10px solid blue"
    },
    "totalCases": { borderRight: '5px solid orange', borderBottom: '5px solid orange', color: 'orange',marginTop:'100px'},
    "totalActive": { borderRight: '5px solid blue', borderBottom: '5px solid blue', color: 'blue' },
    "totalRecoverd": { borderRight: '5px solid green', borderBottom: '5px solid green', color: 'green' },
    "totalDeaths": { borderRight: '5px solid red', borderBottom: '5px solid red', color: 'red' },

    mainGrid:{
        margin:'20px auto 0 auto'
    }
}))

export default function ({totalData}) {

     const classes = useStyle();

    // const sm = 6;
    // const xs = 12;
    return(

        <div className={classes.root}>
       <Paper elevation={3} className={`${classes.paper} ${classes.totalCases}`} >
                    <Typography variant='h5' color='textPrimary'>
                        <CountUp start={0} end={totalData.infected} duration={2.75} separator="," />
                    </Typography>
                    <Typography variant='subtitle1'> Total Infected </Typography>
                </Paper>
                <Paper elevation={3} className={`${classes.paper} ${classes.totalActive}`}>
                    <Typography variant='h5' color='textPrimary'>
                        <CountUp start={0} end={totalData.active} duration={2.75} separator="," />
                    </Typography>
                    <Typography variant='subtitle1'> Total Active </Typography>
                </Paper>
                <Paper elevation={3} className={`${classes.paper} ${classes.totalRecoverd}`}>
                    <Typography variant='h5' color='textPrimary'>
                        <CountUp start={0} end={totalData.recovered} duration={2.75} separator="," />
                    </Typography>
                    <Typography variant='subtitle1'> Total Recovered </Typography>
                </Paper>
                <Paper elevation={3} className={`${classes.paper} ${classes.totalDeaths}`}>
                    <Typography variant='h5' color='textPrimary'>
                        <CountUp start={0} end={totalData.deaths} duration={2.75} separator="," />
                    </Typography>
                    <Typography variant='subtitle1'> Total Deaths </Typography>
                </Paper>
      </div>

    );

  
}