import {
  Box,
  Stack,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function Courses() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const data = [
    {
      id: "1",
      name: "HTML",
      created_by: "Dave Gray",
      desc: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
      url: "https://youtu.be/kUMe1FH4CHE",
    },
    {
      id: "2",
      name: "CSS",
      created_by: "Dave Gray",
      desc: "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.",
      url: "https://youtu.be/OXGznpKZ_sA",
    },
    {
      id: "3",
      name: "JavaScript",
      created_by: "John Smilga",
      desc: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
      url: "https://youtu.be/jS4aFq5-91M",
    },
    {
      id: "4",
      name: "Python",
      created_by: "Beau Carnes",
      desc: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isnt specialized for any specific problems",
      url: "https://youtu.be/eWRfhZUzrAc",
    },
    {
      id: "5",
      name: "React JS",
      created_by: "Coding Addict",
      desc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
      url: "https://youtu.be/2-crBg6wpp0",
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
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;
