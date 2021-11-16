import './App.css';
import React, {useState, useEffect} from "react";
import {makeStyles} from "@mui/styles";
import {Button} from '@mui/material';
import Header from "./components/Header";
import * as creatureList from './name.json';

const useStyles = makeStyles(() => ({
    results: {
        width: '400px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '10px auto',
        padding: '10px',
    },
    item: {
        marginRight: 10,
        width: 100,
        borderBottom: '1px solid black',
        padding: '10px'
    },
    buttons: {
        margin: '10px 0',

    }
}))

function App() {
  const classes = useStyles();

  const [movieTitle1, setMovieTitle1] = useState("");
  const [movieTitle2, setMovieTitle2] = useState("");
  const [movieTitle3, setMovieTitle3] = useState("");

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
      setMovieTitle1(getRandomItem);
  }

  const handleTitle2Change = () => {
      const currentMonsterName = movieTitle2;
      let newMonsterName = getRandomItem();
      while(currentMonsterName === newMonsterName) {
          newMonsterName = getRandomItem();
      }
      setMovieTitle2(newMonsterName);
  }

  useEffect(() =>{
      handleInitialTitle();
  },[])

  return (
    <div className="App">
      <Header/>
        <div className={classes.results}>
            {`${movieTitle1} ${movieTitle2}s ${movieTitle3}`}
        </div>
      <div className={classes.buttons}>
          <Button
              variant={'contained'}
              onClick={handleTitle1Change}
              sx={{marginRight: '5px'}}
          >Monster One</Button>
          <Button
              variant={'contained'}
              onClick={handleTitle2Change}
          >Monster Two</Button>
      </div>
        <Button
            variant={'contained'}
            onClick={handleInitialTitle}
        >
            Full Shuffle
        </Button>
    </div>
  );
}

export default App;
