import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Cake from "./components/cake";
import Main from "./components/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/main" element={<Main />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
