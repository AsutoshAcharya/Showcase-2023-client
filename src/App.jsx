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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/explore" element={<Explore />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default App;
