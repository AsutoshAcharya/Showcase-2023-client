import React from 'react'
import { Box,Typography,Stack,Grid, Card, CardContent, } from '@mui/material';



const Podcasts = () => {
  const cards = [
  { title: 'Card 1', description: 'This is card 1.' },
  { title: 'Card 2', description: 'This is card 2.' },
  { title: 'Card 3', description: 'This is card 3.' },
   { title: 'Card 1', description: 'This is card 1.' },
  { title: 'Card 2', description: 'This is card 2.' },
  { title: 'Card 3', description: 'This is card 3.' },
    { title: 'Card 1', description: 'This is card 1.' },
  { title: 'Card 2', description: 'This is card 2.' },
  { title: 'Card 3', description: 'This is card 3.' },
   { title: 'Card 1', description: 'This is card 1.' },
  { title: 'Card 2', description: 'This is card 2.' },
  { title: 'Card 3', description: 'This is card 3.' },
  
];
  return (
    <Box sx={{width:'100%', height:'100%', padding:'1rem', background:'rgba(236, 240, 241,.6)'}}>
      <Stack sx={{width:'100%', justifyContent:'space-between', alignItems:'center', padding:' 0 6px'}} direction="row">
        <Box><Typography>Podcasts</Typography></Box>
        <Box><Typography>Suggest a Podcast</Typography></Box>
      </Stack>
      <Box>
        <Typography sx={{paddingLeft:'6px', mt:'.8rem'}}>Latest Episodes</Typography>
      </Box>
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{height:'16rem'}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  )
}

export default Podcasts