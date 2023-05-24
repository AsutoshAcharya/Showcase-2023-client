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
import {Link} from "react-router-dom"

function Courses() {
  // const classes = useStyles();
  const [search, setSearch] = useState("");
  const data = [
    {
      id: "1",
      name: "HTML",
      created_by: "Dave Gray",
      desc: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
      url: "https://www.youtube.com/embed/kUMe1FH4CHE",
      route: "/details/1",
    },
    {
      id: "2",
      name: "CSS",
      created_by: "Dave Gray",
      desc: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.",
      url: "https://www.youtube.com/embed/OXGznpKZ_sA",
      route: "/details/2",
    },
    {
      id: "3",
      name: "JavaScript",
      created_by: "John Smilga",
      desc: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB.",
      url:"https://www.youtube.com/embed/jS4aFq5-91M",
      route: "/details/3",
    },
    {
      id: "4",
      name: "Python",
      created_by: "Beau Carnes",
      desc: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isnt specialized for any specific problems",
      url: "https://www.youtube.com/embed/rfscVS0vtbw",
      route: "/details/4",
    },
    {
      id: "5",
      name: "React JS",
      created_by: "Coding Addict",
      desc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013.",
      url: "https://www.youtube.com/embed/bMknfKXIFA8",
      route: "/details/5",
    },
    {
      id: "6",
      name: "Node JS",
      created_by: "John Smilga",
      desc: "Node is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
      url: "https://www.youtube.com/embed/Oe421EPjeBE",
      route: "/details/6",
    },
    {
      id: "7",
      name: "Go Programming",
      created_by: "Boot.dev",
      desc: "Go, also called Golang or Go language, is an open source programming language that Google developed. Software developers use Go in an array of operating systems and frameworks to develop web applications, cloud and networking services, and other types of software.",
      url: "https://www.youtube.com/embed/un6ZyFkqFKo",
      route: "/details/7",
    },
    {
      id: "8",
      name: "Next JS",
      created_by: "Alicia Rodriguez",
      desc: "Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.",
      url: "https://www.youtube.com/embed/KjY94sAKLlw",
      route: "/details/8",
    },
  ];
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 10px",
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
      <Grid container sx={{ mt: 1 }} spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: 1,
              }}
            >
              <CardContent>
                <iframe src={item.url} frameborder="0" />
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    color="black"
                    fontWeight={"600"}
                    fontSize={"1rem"}
                  >
                    Created by: {item.created_by}
                  </Typography>
                </Box>
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
                <Button variant="contained">Buy Now</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;
