import React from 'react';
import RoundedButton from "../../components/RoundedButton.tsx";

const Advantages: React.FC = () => {
    const scrollToComponent = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (
        <div className="bg-[#20BFFA] h-fit flex flex-col items-center justify-center">
            <div className="w-11/12 h-auto md:pt-40 p-15">
                <div className="self-start w-full md:w-1/2 h-1/3 items-start justify-between flex flex-col md:flex-row">
                    <p className="text-white font-inter font-bold ml-5 text-3xl">BENEFÍCIOS <br/> DA HERDEI</p>
                    <RoundedButton text="Simule Agora" onClick={() => scrollToComponent("Calculator")}/>
                </div>
                <div
                    className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-inter font-semibold h-full mt-4">
                    <div
                        className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
                        <span className="text-2xl">⭐</span>
                        <p className="text-center">Segurança e privacidade<br/> dos seus dados</p>
                    </div>
                    <div
                        className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
                        <span className="text-2xl">⭐</span>
                        <p className="text-center">Processo 100% online e sem burocracia</p>
                    </div>
                    <div
                        className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
                        <span className="text-2xl">⭐</span>
                        <p className="text-center">Simulação instantânea <br/> e gratuita</p>
                    </div>
                    <div
                        className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
                        <span className="text-2xl">⭐</span>
                        <p className="text-center">Comodidade e segurança garantidas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
