import Calculator from "../sections/FormCalculator/Calculator.jsx";
import Advantages from "../sections/FormCalculator/Advantages.js";
import Footer from "../sections/Footer.tsx";
import Menu from "../sections/Menu.tsx";
import Header from "../sections/Header.tsx";
const FormCalculator = () => {
    return (
        <div>
            <Menu/>
            <Header/>
            <Advantages/>
            <Calculator/>
            <Footer/>
        </div>
    );
}

export default FormCalculator;
