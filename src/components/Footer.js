import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    footerContainer:{
        backgroundColor:'black',
        color: "white",
        paddingBottom: '10px'
    }
}))

export default function(){

    const classes = useStyle();

    return(
        <div className={classes.footerContainer}>
            <hr/>
           Ⓒ 2020 made by @Murtaza Hanzala 
        </div>
    );
}