import React from "react";
import RoundedButton from "../components/RoundedButton";
import { handleCalculateClick } from "../utils/navigation";
import { useNavigate } from "react-router-dom";
import { scrollToComponent } from "../utils/scrollUtils";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16">
      <div className=" justify-center text-center">
        <h1 className="text-[#20BFFA] text-m font-semibold mb-4">
          Evite Surpresas
        </h1>
        <p className="md:text-5xl text-3xl font-bold mb-3 leading-tight">
          SIMULE SEUS CUSTOS DE <br />
          FORMA RÁPIDA E 100%
          <br />
          ONLINE
        </p>
        <p className=" my-8 font-medium text-[#666664] text-medium">
          Simule agora e veja como a Herdei pode reduzir seus custos de forma
          <br />
          rápida, simples e 100% online.
        </p>
        <div className="flex justify-center w-1/2 mx-auto">
          <RoundedButton
            text="Calcule Gratuitamente"
            onClick={() => scrollToComponent("simulador", navigate)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
