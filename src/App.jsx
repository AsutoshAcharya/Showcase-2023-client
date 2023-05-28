import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Work from "./Pages/Work/Work";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Communities from "./Pages/Communities/Communities";
import Courses from "./Pages/Courses/Courses";
import Podcasts from "./Pages/Podcasts/Podcasts";
import MoreInfo from "./Pages/Courses/MoreInfo";
import Login from "./Pages/Login/Login";
import Chat from "./Pages/Chat/Chat";
import { Stack } from "@mui/material";
import SucessPayment from "./Components/payment/SuccessPayment";
import Cancel from "./Components/Payment/Cancel";
function App() {
  return (
    <Stack width="100vw" height="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route path="/home" element={<Home />} exact /> */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/chat" element={<Chat />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path={`/details/${id}`} element={<MoreInfo />} /> */}
        <Route path="/podcasts" element={<Podcasts />} />
        {/* payments  */}
        <Route path="payment/successful" element={<SucessPayment />} />
        <Route path="payment/failed" element={<Cancel />} />
      </Routes>
    </Stack>
  );
}

export default App;
