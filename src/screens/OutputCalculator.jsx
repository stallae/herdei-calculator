import ProgressBar from "../components/ProgressBar";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const OutputCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    navigate("/");
    return null;
  }

  // Calculate percentages for progress bars
  const calculatePercentage = (value, total) => {
    return Math.round((value / total) * 100);
  };

  // HERDEI values
  const herdeiTaxes = result.HERDEI.estimatedCosts.Taxes.ITCMD.Taxes;
  const herdeiNotary = result.HERDEI.estimatedCosts.Notary;
  const herdeiFees = result.HERDEI.estimatedCosts.Fees;
  const herdeiTotal = herdeiTaxes + herdeiNotary + herdeiFees; // Fix total calculation

  // Others values
  const othersTaxes = result.Others.estimatedCosts.Taxes.ITCMD.Taxes;
  const othersNotary = result.Others.estimatedCosts.Notary;
  const othersFees = result.Others.estimatedCosts.Fees;
  const othersTotal = othersTaxes + othersNotary + othersFees; // Fix total calculation

  // Calculate individual percentages
  const herdeiTaxesPercent = calculatePercentage(herdeiTaxes, herdeiTotal);
  const herdeiNotaryPercent = calculatePercentage(herdeiNotary, herdeiTotal);
  const herdeiFeesPercent = calculatePercentage(herdeiFees, herdeiTotal);

  const othersTaxesPercent = calculatePercentage(othersTaxes, othersTotal);
  const othersNotaryPercent = calculatePercentage(othersNotary, othersTotal);
  const othersFeesPercent = calculatePercentage(othersFees, othersTotal);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="w-full flex flex-col items-center justify-evenly">
          <div className="grid bg-[#8CE0FF] w-full max-w-7xl gap-10 rounded-2xl py-10 overflow-auto relative">
            <button
              onClick={() => navigate("/calculator")}
              className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
            >
              <IoIosArrowBack size={24} />
            </button>
            <div className="text-2xl font-inter font-bold text-black text-center">
              CÁLCULO E SAÍDA DE DADOS
            </div>
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-10 gap-6">
              <div className="bg-white rounded-xl p-6 w-full md:w-[45%]">
                <h3 className="text-xl font-semibold mb-4">
                  Custos totais com a Herdei
                </h3>
                <div className="mb-4">
                  <p className="text-lg mb-2">
                    Impostos: R$ {herdeiTaxes.toLocaleString()}
                  </p>
                  <ProgressBar percentage={herdeiTaxesPercent} />
                  <p className="text-lg mb-2 mt-4">
                    Cartório: R$ {herdeiNotary.toLocaleString()}
                  </p>
                  <ProgressBar percentage={herdeiNotaryPercent} />
                  <p className="text-lg mb-2 mt-4">
                    Honorários: R$ {herdeiFees.toLocaleString()}
                  </p>
                  <ProgressBar percentage={herdeiFeesPercent} />
                  <p className="text-lg font-semibold mt-4">
                    Total: R$ {herdeiTotal.toLocaleString()}
                  </p>
                  <ProgressBar percentage={100} />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 w-full md:w-[45%]">
                <h3 className="text-xl font-semibold mb-4">
                  Custos totais com Outros
                </h3>
                <div className="mb-4">
                  <p className="text-lg mb-2">
                    Impostos: R$ {othersTaxes.toLocaleString()}
                  </p>
                  <ProgressBar percentage={othersTaxesPercent} />
                  <p className="text-lg mb-2 mt-4">
                    Cartório: R$ {othersNotary.toLocaleString()}
                  </p>
                  <ProgressBar percentage={othersNotaryPercent} />
                  <p className="text-lg mb-2 mt-4">
                    Honorários: R$ {othersFees.toLocaleString()}
                  </p>
                  <ProgressBar percentage={othersFeesPercent} />
                  <p className="text-lg font-semibold mt-4">
                    Total: R$ {othersTotal.toLocaleString()}
                  </p>
                  <ProgressBar percentage={100} />
                </div>
              </div>
            </div>
            <div className="text-3xl font-inter font-bold text-black text-center">
              Economia com a Herdei
              <div className="text-3xl mt-2">
                R$ {result.Comparison.totalDifference.amount.toLocaleString()} (
                {result.Comparison.totalDifference.percentage.toFixed(1)}%)
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center h-15 mt-8 w-full max-w-7xl mx-auto px-4 md:px-10">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send/?phone=5511941062025&text=Quero+falar+com+um+Especialista&type=phone_number&app_absent=0")
                }
                className="w-full md:w-auto px-8 py-3 bg-[#20BFFA] text-white font-semibold rounded-full hover:opacity-90"
              >
                Quero ser contatado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputCalculator;
