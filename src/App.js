import './App.css';
import React, {useState, useEffect} from "react";
import {makeStyles} from "@mui/styles";
import {Button, Switch, FormControlLabel, FormControl, FormGroup, Typography} from '@mui/material';
import Header from "./components/Header";
import * as creatureList from './name.json';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
    },
    buttonContainerMonster: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '10px 0'
    },
    formContainer: {
        position: "fixed",
        bottom: 0,
        width: '100vw',
    },
    form: {
        maxWidth: '400px',
        width: '90vw',
        margin: '0 auto',
        position: 'relative',
        padding: '10px',
        paddingTop: '30px',
        border: '1px solid black',
        marginBottom: '20px'
    },
    formTitle: {
        position: 'absolute',
        width: '95%',
        top: '-15px',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '10px',
        background: '#76a9db',
        color: 'white',
        padding: '5px 0'
    },
    optionals: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
    },
    version: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: 'lightgray',
    }
}))

function App() {
  const classes = useStyles();

  const [movieTitle1, setMovieTitle1] = useState("");
  const [movieTitle2, setMovieTitle2] = useState("");
  const [prefix, setPrefix] = useState(null);
  const [suffix, setSuffix] = useState(null);
  const [vsToggle, setVsToggle] = useState(false);

  const version = '0.0.2';

  const getRandomItem = () => {
      return creatureList.monster[Math.floor(Math.random() * creatureList.monster.length)];
  }

  const handleInitialTitle = () => {
      let title1 = getRandomItem();
      let title2 = getRandomItem();
      while(title1 === title2) {
          title2 = getRandomItem();
      }
      setMovieTitle1(title1);
      setMovieTitle2(title2);
  }

  const handleTitle1Change = () => {
      const item = getRandomItem();
      setMovieTitle1(item);
  }

  const handleTitle2Change = () => {
      const currentMonsterName = movieTitle2;
      let newMonsterName = getRandomItem();
      while(currentMonsterName === newMonsterName) {
          newMonsterName = getRandomItem();
      }
      setMovieTitle2(newMonsterName);
  }

  const handleVsToggle = () => {
      setVsToggle(!vsToggle);
  }

  const handlePrefixToggle = () => {
    prefix ? setPrefix(null) : generatePrefix();
  }
  const handleSuffixToggle = () => {
      suffix ? setSuffix(null) : generateSuffix();
  }

  const generatePrefix = () => {
      setPrefix(creatureList.prefix[Math.floor(Math.random() * creatureList.prefix.length)]);
  }

  const generateSuffix = () => {
      setSuffix(creatureList.suffix[Math.floor(Math.random() * creatureList.suffix.length)]);
  }

  useEffect(() =>{
      handleInitialTitle();
  },[])

  return (
    <div className={classes.root}>
        <Header/>
        <Typography sx={{fontFamily: 'Amatic SC', fontWeight: 'bold', textAlign: 'center'}} variant={'h4'} gutterBottom>
            {prefix && <span>{prefix}</span>}&nbsp;{vsToggle ? movieTitle1.many : movieTitle1.one}&nbsp;{vsToggle && <span>vs&nbsp;</span>}{movieTitle2.many}&nbsp;{suffix && <span>{suffix}</span>}
        </Typography>
        <div className={classes.formContainer}>
            <div className={classes.form}>
                <div className={classes.formTitle}>
                    Randomizer
                </div>
                <Button
                    sx={{width: '100%'}}
                    variant={'contained'}
                    onClick={handleInitialTitle}
                >Full Shuffle
                </Button>
                <div className={classes.buttonContainerMonster}>
                    <Button
                        variant={'contained'}
                        onClick={handleTitle1Change}
                    >Monster One</Button>
                    <Button
                        variant={'contained'}
                        onClick={handleTitle2Change}
                    >Monster Two</Button>
                </div>
                <div className={classes.optionals}>
                    <div>
                        <FormControlLabel control={<Switch/>} label={'Prefix'} onChange={handlePrefixToggle}/>
                        {prefix && <Button variant={'contained'} onClick={generatePrefix}>Shuffle Prefix</Button>}
                    </div>
                    <div>
                        <FormControlLabel control={<Switch/>} label={'Display VS'} onChange={handleVsToggle}/>
                    </div>
                    <div>
                        <FormControlLabel control={<Switch/>} label={'Suffix'} onChange={handleSuffixToggle}/>
                        {suffix && <Button variant={'contained'} onClick={generateSuffix}>Shuffle Suffix</Button>}
                    </div>
                </div>
                <div className={classes.version}>
                    {version}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
