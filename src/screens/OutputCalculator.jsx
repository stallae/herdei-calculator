import ProgressBar from "../components/ProgressBar";
import { calculatorResultsMock } from "../configuration/mock";
import Menu from "../sections/Menu";
import Header from "../sections/Header";    
import Footer from "../sections/Footer";

const OutputCalculator = () => {
    const result = calculatorResultsMock;
    
    return (
        <div>
            <Menu/>
            <Header/>
            <div className="h-screen w-screen flex flex-col items-center justify-evenly">
                <div className="grid bg-[#8CE0FF] w-11/12 gap-10 rounded-2xl py-10 overflow-auto">
                    <div className="text-2xl font-inter font-bold text-black text-center">
                        CÁLCULO E SAÍDA DE DADOS
                    </div>
                    <div className="flex flex-col md:flex-row justify-between px-10 md:px-25 gap-6">
                        <div className="bg-white rounded-xl p-6 w-full md:w-[45%]">
                            <h3 className="text-xl font-semibold mb-4">Custos totais com a Herdei</h3>
                            <div className="mb-4">
                                <p className="text-lg mb-2">Impostos: R$ {result.HERDEI.estimatedCosts.Taxes.toLocaleString()}</p>
                                <ProgressBar percentage={33} />
                                <p className="text-lg mb-2 mt-4">Cartório: R$ {result.HERDEI.estimatedCosts.Notary.toLocaleString()}</p>
                                <ProgressBar percentage={9} />
                                <p className="text-lg mb-2 mt-4">Honorários: R$ {result.HERDEI.estimatedCosts.Fees.toLocaleString()}</p>
                                <ProgressBar percentage={16} />
                                <p className="text-lg font-semibold mt-4">Total: R$ {result.HERDEI.estimatedCosts.Total.toLocaleString()}</p>
                                <ProgressBar percentage={41} />
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 w-full md:w-[45%]">
                            <h3 className="text-xl font-semibold mb-4">Custos totais com Outros</h3>
                            <div className="mb-4">
                                <p className="text-lg mb-2">Impostos: R$ {result.Others.estimatedCosts.Taxes.toLocaleString()}</p>
                                <ProgressBar percentage={33} />
                                <p className="text-lg mb-2 mt-4">Cartório: R$ {result.Others.estimatedCosts.Notary.toLocaleString()}</p>
                                <ProgressBar percentage={33} />
                                <p className="text-lg mb-2 mt-4">Honorários: R$ {result.Others.estimatedCosts.Fees.toLocaleString()}</p>
                                <ProgressBar percentage={33} />
                                <p className="text-lg font-semibold mt-4">Total: R$ {result.Others.estimatedCosts.Total.toLocaleString()}</p>
                                <ProgressBar percentage={100} />
                            </div>
                        </div>
                    </div>
                    <div className="text-3xl font-inter font-bold text-black text-center">
                        Economia
                        <div className="text-3xl mt-2">
                            R$ {result.Comparison.totalDifference.amount.toLocaleString()} ({result.Comparison.totalDifference.percentage.toFixed(1)}%)
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OutputCalculator;
