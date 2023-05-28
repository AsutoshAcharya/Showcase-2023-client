import {
  Box,
  Stack,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "videojs-youtube";
import VideoJS from "../../utils/VideoJS/VideoJS";

function Courses() {
  const navigate = useNavigate();
  // const classes = useStyles();
  const [search, setSearch] = useState("");
  const data = [
    {
      id: "price_1NBvedSJQp85YLiwosP8ZdKe",
      name: "HTML",
      created_by: "Dave Gray",
      desc: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
      url: "https://youtu.be/kUMe1FH4CHE",
      route: "/details/1",
      price: 2000,
    },
    {
      id: "price_1NBvfLSJQp85YLiwcAnX4JTX",
      name: "CSS",
      created_by: "Dave Gray",
      desc: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.",
      url: "https://youtu.be/OXGznpKZ_sA",
      route: "/details/2",
      price: 3000,
    },
    {
      id: "price_1NBvfmSJQp85YLiwpq8xYa6V",
      name: "JavaScript",
      created_by: "John Smilga",
      desc: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB.",
      url: "https://youtu.be/jS4aFq5-91M",
      route: "/details/3",
      price: 3500,
    },
    {
      id: "price_1NBvgJSJQp85YLiw0D5hVIoC",
      name: "Python",
      created_by: "Beau Carnes",
      desc: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isnt specialized for any specific problems",
      url: "https://youtu.be/eWRfhZUzrAc",
      route: "/details/4",
      price: 5000,
    },
    {
      id: "price_1NBvh4SJQp85YLiwjWg4YHsI",
      name: "React JS",
      created_by: "Coding Addict",
      desc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013.",
      url: "https://youtu.be/2-crBg6wpp0",
      route: "/details/5",
      price: 8000,
    },
    {
      id: "price_1NBvhTSJQp85YLiwHio7ODhO",
      name: "Node JS",
      created_by: "John Smilga",
      desc: "Node is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
      url: "https://youtu.be/Oe421EPjeBE",
      route: "/details/6",
      price: 4600,
    },
    {
      id: "price_1NBvhqSJQp85YLiwQ8dKBXkL",
      name: "Go Programming",
      created_by: "Boot.dev",
      desc: "Go, also called Golang or Go language, is an open source programming language that Google developed. Software developers use Go in an array of operating systems and frameworks to develop web applications, cloud and networking services, and other types of software.",
      url: "https://youtu.be/un6ZyFkqFKo",
      route: "/details/7",
      price: 2500,
    },
    {
      id: "price_1NBviBSJQp85YLiwpTRXWK5a",
      name: "Next JS",
      created_by: "Alicia Rodriguez",
      desc: "Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.",
      url: "https://www.youtube.com/KjY94sAKLlw",
      route: "/details/8",
      price: 15000,
    },
  ];

  const checkout = async (course) => {
    try {
      const res = await axios.post(
        "https://wide-eyed-cyan-earrings.cyclic.app/checkout",
        course,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (res.data.url) {
        window.location.assign(res.data.url);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: "90%",
        height: "100%",
        margin: "auto",
        p: "2rem 0",
        // background: "red",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // padding: "4px 10px",
        }}
      >
        <Typography
          fontWeight="600"
          fontSize="2.5rem"
          color="#2d319c"
          sx={{ mt: "1rem" }}
        >
          Courses
        </Typography>
        <Box>
          <TextField
            required
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            value={search}
            onChange={() => setSearch(e.target.value)}
          />
        </Box>
      </Box>
      <Grid container sx={{ mt: 1 }} spacing={3} rowSpacing={5}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: 2,
                pb: "1rem",
              }}
            >
              <VideoJS
                options={{
                  techOrder: ["youtube"],
                  autoplay: false,
                  controls: true,
                  responsive: true,
                  fluid: true,
                  // poster: "/licensed-image.jpg",
                  sources: {
                    // src: "https://www.youtube.com/watch?v=ZE1do8UdHsI&ab_channel=HowToIn5Minutes",
                    src: `${item.url}`,
                    type: "video/youtube",
                  },
                }}
              />
              <CardContent
                sx={{ display: "flex", flexFlow: "column", gap: ".5rem" }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="gray"
                    // fontWeight={"600"}
                    fontSize={".8rem"}
                  >
                    Created by :{" "}
                    <Link
                      to=""
                      style={{ color: "blue", textDecoration: "none" }}
                    >
                      {item.created_by}
                    </Link>
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 5,
                  }}
                >
                  {item.desc}
                </Typography>
                <Box></Box>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                }}
              >
                <Link to={item.route}>
                  <Button variant="outlined">More Info</Button>
                </Link>
                <Button variant="contained" onClick={() => checkout(item)}>
                  Buy Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;
