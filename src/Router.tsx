import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Formulario";
import NotFound from "./pages/NotFound";
import Influencia from "./pages/Influencia";
import NegocioViral from "./pages/NegocioViral";
import RouterTracker from "./components/RouterTracker";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <RouterTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmacao" element={<About />} />
        <Route path="/influencia" element={<Influencia />} />
        <Route path="/negocio-viral" element={<NegocioViral />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
