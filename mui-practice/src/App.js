import './App.css';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  myCustomStyle: {
    fontStyle: 'oblique',
    color: 'cadetblue',
    fontSize: '20px' /*this doesn't work without !important keyword */,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <Typography variant='h1' className={classes.myCustomStyle}>
        Hello world
      </Typography>
    </div>
  );
}

export default App;
