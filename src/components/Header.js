import React from 'react';
import {makeStyles} from '@mui/styles';
import logo from './logo.jpg';

const useStyles = makeStyles(() =>( {
    root: {
    }
}))

const Header =(props) =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={logo} alt={'logo'}/>
        </div>
    )
}

export default Header;