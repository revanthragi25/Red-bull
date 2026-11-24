import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Sports from "./pages/Sports/Sports";
import Events from "./pages/Events/Events";
import Athletes from "./pages/Athletes/Athletes";
import Videos from "./pages/Videos/Videos";
import Gaming from "./pages/Gaming/Gaming";
import Products from "./pages/Products/Products";
import Klrahul from "./Klrahul";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/events" element={<Events />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/products" element={<Products />} />
        <Route path="/klrahul" element={<Klrahul/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;