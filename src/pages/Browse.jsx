import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/browse.css';
import '../styles/Buttons.css';
import SecondNav from "../components/secondNav"
import PopularToys from "./toys";
import ComfyBeds from "./beds";
import Adopt from "./adopt";

function BrowsePage() {
  return (
    <div className="homepage-bg">
      <NavBar />
      <SecondNav />
      
      <Routes>
        <Route index element={<PopularToys />} />
        <Route path="toys" element={<PopularToys />} />
        <Route path="beds" element={<ComfyBeds />} />
        <Route path="adoption" element={<Adopt />} />
      </Routes>
    </div>
  );
}

export default BrowsePage;
