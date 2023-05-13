import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// const theme = createTheme({
//   "@global": {
//     "*::-webkit-scrollbar": {
//       width: "0.4em",
//     },
//     "*::-webkit-scrollbar-track": {
//       "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
//     },
//     "*::-webkit-scrollbar-thumb": {
//       backgroundColor: "rgba(0,0,0,.1)",
//       outline: "1px solid slategrey",
//     },
//   },
// });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(

    <Router>
      {/* <ThemeProvider> */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </Router>
 
);
