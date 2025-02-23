import React from 'react'
import RoundedButton from '../../components/RoundedButton.tsx'
import { AiFillStar } from 'react-icons/ai'
import { scrollToComponent } from '../../utils/scrollUtils'

const Advantages: React.FC = () => {
  return (
    <div className="bg-[#20BFFA] h-fit flex flex-col items-center justify-center">
      <div className="w-11/12 h-auto md:pt-40 p-15">
        <div className="self-start w-full md:w-1/2 h-1/3 items-start justify-between flex flex-col md:flex-row">
          <p className="text-white font-inter font-bold ml-5 text-3xl">
            BENEFÍCIOS <br /> DA HERDEI
          </p>
          <RoundedButton
            text="Simule Agora"
            onClick={() => scrollToComponent('simulador')}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-inter font-semibold h-full mt-4">
          <div className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
            <div className="w-12 h-12 bg-[#E6F7FF] rounded-lg flex items-center justify-center mb-2">
              <AiFillStar size={24} color="#20BFFA" />
            </div>
            <p className="text-center">
              Segurança e privacidade
              <br /> dos seus dados
            </p>
          </div>
          <div className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
            <div className="w-12 h-12 bg-[#E6F7FF] rounded-lg flex items-center justify-center mb-2">
              <AiFillStar size={24} color="#20BFFA" />
            </div>
            <p className="text-center">Processo 100% online e sem burocracia</p>
          </div>
          <div className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
            <div className="w-12 h-12 bg-[#E6F7FF] rounded-lg flex items-center justify-center mb-2">
              <AiFillStar size={24} color="#20BFFA" />
            </div>
            <p className="text-center">
              Simulação instantânea <br /> e gratuita
            </p>
          </div>
          <div className="w-full p-3 md:w-1/4 h-56 bg-white flex flex-col items-center justify-center rounded-lg">
            <div className="w-12 h-12 bg-[#E6F7FF] rounded-lg flex items-center justify-center mb-2">
              <AiFillStar size={24} color="#20BFFA" />
            </div>
            <p className="text-center">Comodidade e segurança garantidas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages
