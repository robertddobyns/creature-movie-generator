import './App.css';
import React, {useState, useEffect} from "react";
import {makeStyles} from "@mui/styles";
import {Button, Switch, FormControlLabel, FormControl, FormGroup, Typography} from '@mui/material';
import Header from "./components/Header";
import * as creatureList from './name.json';

const useStyles = makeStyles(() => ({
    root: {
        width: '400px',
        margin: '0 auto',
    },
    results: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '10px auto',
        padding: '10px',
        fontFamily: 'Amatic SC',
        maxWidth: '400px'
    },
    buttonContainerMonster: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '10px 0'
    },
    form: {
        border: '1px solid black',
        padding: '10px',
        paddingTop: '20px' ,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    formTitle: {
        position: 'absolute',
        textAlign: 'center',
        top: '-12px',
        width: '380px',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: 10,
        fontWeight: 'bold'
    },
    optionals: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
    }
}))

function App() {
  const classes = useStyles();

  const [movieTitle1, setMovieTitle1] = useState("");
  const [movieTitle2, setMovieTitle2] = useState("");
  const [prefix, setPrefix] = useState(null);
  const [suffix, setSuffix] = useState(null);
  const [vsToggle, setVsToggle] = useState(false);

  const getRandomItem = () => {
      return creatureList.monster[Math.floor(Math.random() * creatureList.monster.length)];
  }

  const handleInitialTitle = () => {
      let title1 = getRandomItem();
      let title2 = getRandomItem();
      while(title1 === title2) {
          title2 = getRandomItem();
      }
      setMovieTitle1(title1.one);
      setMovieTitle2(title2.many);
  }

  const handleTitle1Change = () => {
      const item = getRandomItem();
      setMovieTitle1(item.one);
  }

  const handleTitle2Change = () => {
      const currentMonsterName = movieTitle2.many;
      let newMonsterName = getRandomItem();
      while(currentMonsterName === newMonsterName.many) {
          newMonsterName = getRandomItem();
      }
      setMovieTitle2(newMonsterName.many);
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
    <div className="App">
      <Header/>
        <div className={classes.root}>
            <Typography sx={{fontFamily: 'Amatic SC', fontWeight: 'bold'}} variant={'h3'} gutterBottom>
                {prefix && <span>{prefix}</span>}&nbsp;{movieTitle1}&nbsp;{vsToggle && <span>vs&nbsp;</span>}{movieTitle2}&nbsp;{suffix && <span>{suffix}</span>}
            </Typography>
            <div className={classes.form}>
                <span className={classes.formTitle}>Randomizer</span>
                <Button
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
                        {prefix && <Button variant={'contained'}>Shuffle Prefix</Button>}
                    </div>
                    <div>
                        <FormControlLabel control={<Switch/>} label={'Display VS'} onChange={handleVsToggle}/>
                    </div>
                    <div>
                        <FormControlLabel control={<Switch/>} label={'Suffix'} onChange={handleSuffixToggle}/>
                        {suffix && <Button variant={'contained'}>Shuffle Suffix</Button>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
