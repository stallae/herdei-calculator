import { PiPiggyBank, PiIdentificationCard, PiSealCheck } from "react-icons/pi";

const Steps = () => {
  return (
    <div id="como-funciona">
      <div className="w-full bg-[#20BFFA] h-auto pt-20 px-15">
        <div className="self-center align-middle w-full h-1/3 flex flex-col items-center">
          <p className="text-white font-inter font-bold text-4xl pb-3 text-center">
            COMO FUNCIONA?
          </p>
          <p className="text-white font-inter font-medium text-lg text-center">
            Herança Simplificada em <br />3 Passos Rápidos
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 py-10 md:space-y-0 md:space-x-4 text-inter font-semibold h-full mt-4">
          <div className="w-full md:w-1/3 h-56 bg-white flex flex-col p-10 justify-center rounded-2xl">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 bg-[#222529] rounded-full flex items-center justify-center">
                <PiIdentificationCard className="text-[#20BFFA] text-2xl" />
              </div>
              <div className="text-start font-inter text-lg font-bold">
                Preencha suas informações
              </div>
              <div className="text-sm text-gray-500">
                Informe seus dados e os detalhes do <br /> patrimônio.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-56 bg-white flex flex-col p-10 justify-center rounded-2xl">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 bg-[#222529] rounded-full flex items-center justify-center">
                <PiSealCheck className="text-[#20BFFA] text-2xl" />
              </div>
              <div className="text-start font-inter text-lg font-bold">
                Compare os custos
              </div>
              <div className="text-sm text-gray-500">
                Veja a diferença entre os custos tradicionais <br />e os da
                Herdei.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-56 bg-white flex flex-col p-10 justify-center rounded-2xl">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 bg-[#222529] rounded-full flex items-center justify-center">
                <PiPiggyBank className="text-[#20BFFA] text-2xl" />
              </div>
              <div className="text-start font-inter text-lg font-bold">
                Economize
              </div>
              <div className="text-sm text-gray-500">
                Descubra o quanto você pode poupar e <br /> agilize seu processo
                com a gente.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
