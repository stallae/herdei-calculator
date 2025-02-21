import Calculator from "../sections/FormCalculator/Calculator.jsx";
import Footer from "../sections/Footer.tsx";
import Menu from "../sections/Menu.tsx";
import Header from "../sections/Header.tsx";
import Steps from "../sections/FormCalculator/Steps.tsx";
import Testimonials from "../sections/FormCalculator/Testimonials.tsx";
import FAQs from "../sections/FormCalculator/FAQs.tsx";

const FormCalculator = () => {
    return (
        <div>
            <Menu/>
            <Header/>
            <Steps/>
            <Calculator/>
            <Testimonials/>
            <FAQs/>
            <Footer/>
        </div>
    );
}

export default FormCalculator;
