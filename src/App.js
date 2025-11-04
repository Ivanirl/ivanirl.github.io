import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import DefaultLayout from "./components_oriflame/Layout";

import Filler from "./pages/filler";
import Filler2 from "./pages/filler2";
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation()

  return (
    <DefaultLayout>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/filler" element={<Filler />}></Route>
        <Route path="/filler2" element={<Filler2 />}></Route>
      </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
}

export default App;
