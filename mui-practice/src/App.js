import './App.css';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  myCustomStyle: {
    fontStyle: 'oblique',
    color: 'cadetblue',
    fontSize: '22px' /*this doesn't work without !important keyword */,
    '&:hover': {
      color: 'blueviolet',
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <Typography className={classes.myCustomStyle} variant='h1'>
        Hello world
      </Typography>
    </div>
  );
}

export default App;
