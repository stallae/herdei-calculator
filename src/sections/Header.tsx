import HerdeiLogo from "../assets/HerdeiLogo.png";
import RoundedButton from "../components/RoundedButton";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white w-full shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <img src={HerdeiLogo} alt="Herdei Logo" className="h-8 w-8 mr-2"/>
                        <span className="font-bold text-xl">Herdei</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-5 w-1/2 ml-10">
                        <a href="/" className="text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                        <a href="#como-funciona" className="text-gray-600 hover:text-gray-900">
                            Como Funciona?
                        </a>
                        <a href="#simulador" className="text-gray-600 hover:text-gray-900">
                            Simulador
                        </a>
                        <a href="#sobre" className="text-gray-600 hover:text-gray-900">
                            Sobre
                        </a>
                        <a href="#contato" className="text-gray-600 hover:text-gray-900">
                            Contato
                        </a>
                    </nav>

                    <div className="hidden md:flex justify-end w-1/2">
                        <RoundedButton text="Simular agora" onClick={() => {}} />
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="py-2 px-4 bg-[#ABE0F3] rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 w-fit">
                            <a href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                                Home
                            </a>
                            <a href="#como-funciona" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                                Como Funciona?
                            </a>
                            <a href="#simulador" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                                Simulador
                            </a>
                            <a href="#sobre" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                                Sobre
                            </a>
                            <a href="#contato" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                                Contato
                            </a>
                            <div className="px-3 py-2">
                                <RoundedButton text="Simular agora" onClick={() => {}} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
