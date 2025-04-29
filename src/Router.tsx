import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Formulario";
import NotFound from "./pages/NotFound";
import Influencia from "./pages/Influencia";
import NegocioViral from "./pages/NegocioViral";
import NegocioViralB from "./pages/NegocioViralB";
import RouterTracker from "./components/RouterTracker";
import Bonus from "./pages/Bonus";
import MentoryLegacy from "./pages/MentoryLegacy";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <RouterTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmacao" element={<About />} />
        <Route path="/influencia" element={<Influencia />} />
        <Route path="/negocio-viral" element={<NegocioViral />} />
        <Route path="/negocioviral" element={<NegocioViralB />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/mentoria-legacy" element={<MentoryLegacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
