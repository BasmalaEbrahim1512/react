import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./Component/Ab";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Services/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
