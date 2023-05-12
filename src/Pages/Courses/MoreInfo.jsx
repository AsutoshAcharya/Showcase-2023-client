import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
const info = [
  {
    id: 1,
    info: "This course includes:Intro Getting Started \n Chapter 2 - Head Element Chapter 3 - Text Basics Chapter 4 - List TypesChapter 5 - Add Links ",
  },
  {
    id: 2,
    info: "This course includes:Intro Getting Started \n Chapter 2 - Head Element Chapter 3 - Text Basics Chapter 4 - List TypesChapter 5 - Add Links ",
  },
];
const MoreInfo = () => {
    const loc = useLocation()
    console.log(loc)
  
    return (
  <Box>
sdnjfhuiogaerh
  </Box>
  )
};

export default MoreInfo;
