import "./App.css";
import Index from "./pages/Index";
import Escospe from "./pages/Escospe";
import Funciona from "./pages/Funciona";
import Quato from "./pages/Quato";
import Quiser from "./pages/Quiser";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="Contactos" element={<Escospe />} />
      <Route path="invoices2" element={<Funciona />} />
      <Route path="invoices3" element={<Quato />} />
      <Route path="invoices4" element={<Quiser />} />
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
