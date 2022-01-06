import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Button, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material';

const CoffeeCard = (props) => {
  const { avatarSrc, cardTitle, subtitle, description, imgSrc } = props;
  return (
    <Card sx={{ minWidth: '15rem', maxWidth: '25rem', margin: 'auto' }}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={cardTitle}
        subheader={subtitle}
      />
      <CardMedia component='img' height='194' src={imgSrc} alt='Paella dish' />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Description
        </Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Button sx={{ marginLeft: 'auto' }} color='info'>
          ORDER NOW
        </Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
