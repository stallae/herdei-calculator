import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormCalculator from './screens/FormCalculator';
import OutputCalculator from './screens/OutputCalculator';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormCalculator />} />
                <Route path="/output" element={<OutputCalculator />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App; 