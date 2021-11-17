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
        <>
            <img src={logo} alt={'logo'}/>
        </>
    )
}

export default Header;