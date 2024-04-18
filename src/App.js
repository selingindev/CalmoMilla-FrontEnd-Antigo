import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/static/navbar/Navbar';
import Footer from './assets/components/static/footer/Footer';
import Home from "./assets/components/pages/home/Home";
import SobreNos from "./assets/components/pages/about/SobreNos";
import Blog from "./assets/components/pages/blog/Blog";
import Login from "./assets/components/pages/login/Login";
import Parceiros from "./assets/components/pages/parceiros/Parceiros";
import Funcionalidades from "./assets/components/pages/funcionalidades/Funcionalidades";
import CadastreSe from './assets/components/pages/cadastre-se/CadastreSe'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/inicio" element={<Home />} />

          <Route path="/quem-somos" element={<SobreNos />} />

          <Route path="/comunidade" element={<Blog />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastre-se" element={<CadastreSe />} />

          <Route path="/parceiros" element={<Parceiros />} />

          <Route path="/funcionalidades" element={<Funcionalidades />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
