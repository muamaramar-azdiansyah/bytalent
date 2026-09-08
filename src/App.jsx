import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import CaraKerja from "./pages/CaraKerja";
import Portfolio from "./pages/Portfolio";
import Testimoni from "./pages/Testimoni";
import FAQ from "./pages/FAQ";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/cara-kerja" element={<CaraKerja />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/layanan/:slug" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;