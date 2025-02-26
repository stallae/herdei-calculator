import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCalculator from "./screens/FormCalculator";
import OutputCalculator from "./screens/OutputCalculator";
import OnlyCalculator from "./screens/OnlyCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormCalculator />} />
        <Route path="/output" element={<OutputCalculator />} />
        <Route path="/calculadora" element={<OnlyCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
