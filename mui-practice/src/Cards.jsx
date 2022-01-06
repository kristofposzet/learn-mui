import { Grid } from '@mui/material';
import React from 'react';
import Card from './Card';
import { COFFEE_MACHINES } from './constants';

const getCard = (coffeeMachine) => (
  <Grid item xs={12} sm={6} md={4} key={coffeeMachine.id}>
    <Card {...coffeeMachine} />
  </Grid>
);

const getCards = () => COFFEE_MACHINES.map((coffeeMachine) => getCard(coffeeMachine));

const Cards = () => {
  return (
    <Grid container spacing={3} justifyContent='center'>
      {getCards()}
    </Grid>
  );
};

export default Cards;
