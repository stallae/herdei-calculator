import { useEffect } from "react";
import Calculator from "../sections/FormCalculator/Calculator.jsx";
import Footer from "../sections/Footer.tsx";
import Menu from "../sections/Menu.tsx";
import Header from "../sections/Header.tsx";
import Steps from "../sections/FormCalculator/Steps.tsx";

const FormCalculator = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      function sendHeight() {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({ iframeHeight: height }, "*");
      }

      window.addEventListener("load", sendHeight);
      window.addEventListener("resize", sendHeight);
      setInterval(sendHeight, 500);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Menu />
      <Header />
      <Steps />
      <Calculator />
      <Footer />
    </div>
  );
};

export default FormCalculator;
