import { Box, Stack } from '@mui/material'
import React from 'react'

function Courses() {
  const data = [
    {
      id:'1',
      name:'HTML',
      created_by:'Dave Gray',
      desc:'HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.',
      url:'https://youtu.be/kUMe1FH4CHE'
    },
    {
      id:'2',
      name:'CSS',
      created_by:'Dave Gray',
      desc:'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.',
      url:"https://youtu.be/OXGznpKZ_sA",
    },
    {
      id:'2',
      name:'CSS',
      created_by:'Dave Gray',
      desc:'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.',
      url:"https://youtu.be/OXGznpKZ_sA",
    },
  ]
  return (
    <Box sx={{width:'100%', height:'100vh'}}>

    </Box>
  )
}

export default Courses