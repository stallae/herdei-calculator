import Calculator from "../sections/FormCalculator/Calculator.jsx";
import Advantages from "../sections/FormCalculator/Advantages.js";
import Footer from "../sections/Footer.tsx";
import Header from "../sections/Header.tsx";
const FormCalculator = () => {
    return (
        <div>
            <Header/>
            <Advantages/>
            <Calculator/>
            <Footer/>
        </div>
    );
}

export default FormCalculator;
