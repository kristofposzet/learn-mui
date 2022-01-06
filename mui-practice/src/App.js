import './App.css';
import { Grid } from '@mui/material';
import Header from './Header';
import Cards from './Cards';

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} lg={2} />
        <Grid item xs={12} sm={10} lg={8} sx={{ margin: '1rem' }}>
          <Cards />
        </Grid>
        <Grid item xs={0} sm={1} lg={2} />
      </Grid>
    </Grid>
  );
}

export default App;
