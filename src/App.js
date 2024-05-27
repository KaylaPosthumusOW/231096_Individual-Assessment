
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import BrowsePage from "./pages/Browse"
import './App.css';
import ComfyBeds from "./pages/beds";
import PopularToys from "./pages/toys";
import Adopt from "./pages/adopt";
import AddPetAdoption from "./pages/AddPetAdoption";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element ={<Homepage />} />
        <Route path="/browse/*" element ={<BrowsePage />} />
          <Route index element={<PopularToys />} />
          <Route path="/toys" element={<PopularToys />} />
          <Route path="/beds" element={<ComfyBeds />} />
        <Route path="/adopt" element ={<Adopt />} />
        <Route path="/addAdoption" element ={<AddPetAdoption />} />
      </Routes>
    </Router>
  );
}

export default App;
