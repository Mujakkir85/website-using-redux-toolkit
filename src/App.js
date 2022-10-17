import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
    return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/videos/:videoId" element={<Video/>}></Route>
      </Routes>
      <Footer/>
    </>
    )
}

export default App;
