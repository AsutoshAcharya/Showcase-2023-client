import React from "react";
import { Box, Typography, Stack, Grid, Card, CardContent } from "@mui/material";

const Podcasts = () => {
  const cards = [
    {
      title: "CausePods",
      img: "https://i.pinimg.com/474x/68/49/10/684910e101b35bc8fb9e45e1e944c10a.jpg",
      description: "Podcast for the cause",
    },
    {
      title: "Change your Mood",
      img: "https://i.pinimg.com/474x/bb/25/82/bb2582a96e6f74ad3009e1b25806eef4.jpg",
      description: "Change your moods by this podcast",
    },
    {
      title: "T.A.P.T.",
      img: "https://i.pinimg.com/474x/81/63/0d/81630d11914e5a30530654670c3cb217.jpg",
      description: "Awesome Podcast",
    },
    {
      title: "How it is!!",
      img: "https://i.pinimg.com/474x/88/fb/42/88fb42afb64f3e2f1ed90c1a5167e443.jpg",
      description: "lorem ispummmmmm",
    },
    {
      title: "Money X 3",
      img: "https://i.pinimg.com/474x/1e/49/fa/1e49fa194f47983c40ce473c41d5ecb4.jpg",
      description: "Money Money Money",
    },
    {
      title: "Https 203",
      img: "https://web.dev/images/podcasts/http203.jpg",
      description:
        "Google Developers Jake and Surma discuss their philosophies about web development and the various aspects of it, meanwhile dropping in lifehacks, lessons and some rather honest truths.",
    },
    {
      title: "Designer VS Developers",
      img: "https://web.dev/images/podcasts/designer-vs-developer.jpg",
      description: "Designer ops Devs",
    },
    {
      title: "The CSS",
      img: "https://web.dev/images/podcasts/css-podcast.jpg",
      description: "The ultimate CSS podcast",
    },
    {
      title: "The state of the Web",
      img: "https://web.dev/images/podcasts/state-of-the-web.jpg",
      description: "Discuss about various states",
    },
    {
      title: "Search of the Record",
      img: "https://web.dev/images/podcasts/search-off-the-record.jpg",
      description: "Google searches",
    },
    {
      title: "Syntax",
      img: "https://i1.feedspot.com/200/4979505.jpg?t=1604996251",
      description:
        "They explain how they work and talk about their own experiences.",
    },
    {
      title: "Developer Tea",
      img: "https://i1.feedspot.com/200/4954453.jpg?t=1604996274",
      description:
        "Developer Tea exists to help driven developers connect to their ultimate purpose and excel at their work",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        background: "rgba(236, 240, 241,.6)",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: " 0 6px",
        }}
        direction="row"
      >
        <Box>
          <Typography fontSize="1.6rem" color='black' fontWeight="600" >Podcasts</Typography>
        </Box>
        <Box>
          <Typography fontSize="1.2rem" color='black' fontWeight="500">Suggest a Podcast</Typography>
        </Box>
      </Stack>
      <Box>
        <Typography fontSize="1.2rem"  fontWeight="500" color='blue' sx={{ paddingLeft: "6px", mt: ".8rem" }}>
          Latest Episodes
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "16rem", boxShadow: 1, ":hover":{
border:'1px dotted red',
transform: "scale(1.05)",
            }, }}>
              <CardContent>
                <img src={card.img} alt="dd" height="150" width="100%" />
              </CardContent>
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
  );
};

export default Podcasts;
