import React from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() =>( {
    root: {

    }
}))

const Header =(props) =>{
    const classes = useStyles();

    return (
        <h1>
            Creature Feature Generator
        </h1>
    )
}

export default Header;