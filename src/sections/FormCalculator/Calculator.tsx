import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import SquaredButton from "../../components/SquaredButton";
import {
  Location,
  MaritalStatus,
  PropertyType,
  MaritalStatusType,
  LocationType,
} from "../../configuration/FormConstants";
import { useNavigate } from "react-router-dom";
import { calculateTaxes } from "../../services/calculatorService";

interface Good {
  type: string;
  value: string;
  location: LocationType;
  acquiredAfterUnion: string;
}

const Calculator = () => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [numberOfGoods, setNumberOfGoods] = useState("");
  const [goods, setGoods] = useState<Good[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleClear = () => {
    setMaritalStatus("");
    setStateOfResidence("");
    setNumberOfGoods("");
    setGoods([]);
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleNumberOfGoodsChange = (value: string) => {
    const num = parseInt(value) || 0;
    setNumberOfGoods(value);
    setGoods(
      Array(num)
        .fill(null)
        .map(() => ({
          type: "",
          value: "",
          location: "" as LocationType,
          acquiredAfterUnion: "",
        })),
    );
  };

  const updateGood = (index: number, field: string, value: string) => {
    const updatedGoods = [...goods];
    updatedGoods[index] = {
      ...updatedGoods[index],
      [field]: field === "location" ? (value as LocationType) : value,
    };
    setGoods(updatedGoods);
  };

  const isFormValid = () => {
    if (!maritalStatus || !stateOfResidence || !numberOfGoods) return false;
    if (!name || !email || !phone) return false;

    return goods.every((good) => {
      if (!good.type || !good.value) return false;
      if (good.type === "Imóvel" && !good.location) return false;
      if (
        [
          "União com comunhão universal de bens",
          "União com comunhão parcial de bens",
          "União com separação obrigatória de bens",
        ].includes(maritalStatus) &&
        !good.acquiredAfterUnion
      )
        return false;
      return true;
    });
  };

  const getFormValidationMessage = () => {
    if (!maritalStatus) return "Por favor, selecione o estado civil";
    if (!stateOfResidence) return "Por favor, selecione o estado de residência";
    if (!numberOfGoods) return "Por favor, informe a quantidade de bens";
    if (!name) return "Por favor, informe seu nome";
    if (!email) return "Por favor, informe seu email";
    if (!phone) return "Por favor, informe seu telefone";

    for (let i = 0; i < goods.length; i++) {
      const good = goods[i];
      if (!good.type) return `Por favor, selecione o tipo do bem ${i + 1}`;
      if (!good.value) return `Por favor, informe o valor do bem ${i + 1}`;
      if (good.type === "Imóvel" && !good.location)
        return `Por favor, selecione a localização do imóvel ${i + 1}`;
      if (
        [
          "União com comunhão universal de bens",
          "União com comunhão parcial de bens",
          "União com separação obrigatória de bens",
        ].includes(maritalStatus) &&
        !good.acquiredAfterUnion
      )
        return `Por favor, informe se o bem ${i + 1} foi adquirido depois da união`;
    }

    return "Preencha todos os campos obrigatórios";
  };

  return (
    <div
      id="simulador"
      className=" w-screen bg-[#20BFFA] flex flex-col items-center gap-10 p-5 md:p-10"
    >
      <div className="text-3xl font-bold w-10/12">
        <span className="text-white">CALCULADORA</span>
        <br />
        <span className="text-white">DE </span>
        <span className="text-black">IMPOSTOS</span>
      </div>
      <div className="grid bg-white w-11/12 h-10/12 gap-4 rounded-2xl p-5 py-10 md:p-15 overflow-auto">
        <div className="border-b border-[#20BFFA] pb-4 mb-4">
          <h3 className="text-sm font-semibold mb-3">Informações de Contato</h3>
          <div className="w-full grid-cols-3 flex gap-4 pb-3">
            <Input
              label="Nome"
              value={name}
              onChange={setName}
              type="text"
              required={true}
            />
            <Input
              label="Email"
              value={email}
              onChange={setEmail}
              type="email"
              required={true}
            />
            <Input
              label="Telefone"
              value={phone}
              onChange={setPhone}
              type="tel"
              required={true}
            />
          </div>
        </div>
        <div>
          <div className="w-full grid-cols-2 flex gap-4 pb-3">
            <Dropdown
              label="Estado Civil"
              options={MaritalStatus}
              value={maritalStatus}
              onChange={setMaritalStatus}
            />
            <Dropdown
              label="Estado de Residência"
              options={Location}
              value={stateOfResidence}
              onChange={setStateOfResidence}
            />
          </div>
          <div className="w-full grid-cols-2 flex gap-4 pb-3">
            <Input
              label="Quantidade de Bens"
              value={numberOfGoods}
              onChange={handleNumberOfGoodsChange}
              placeholder="Quantidade de Bens"
            />
          </div>

          {goods.map((good, index) => (
            <div key={index} className="border-t border-[#20BFFA] pt-4 mt-4">
              <h3 className="text-sm font-semibold mb-3">Bem {index + 1}</h3>
              <div className="w-full grid-cols-2 flex gap-4 pb-3">
                <Dropdown
                  label="Tipo de Bem"
                  options={PropertyType}
                  value={good.type}
                  onChange={(value) => updateGood(index, "type", value)}
                  required={true}
                />

                <Input
                  label="Valor do Bem"
                  type="number"
                  value={good.value}
                  onChange={(value) => updateGood(index, "value", value)}
                  step={10000}
                  required={true}
                  min={0}
                />
              </div>
              {good.type === "Imóvel" && (
                <div className="w-full grid-cols-2 flex gap-4 pb-3">
                  <Dropdown
                    label="Localização do Bem"
                    options={Location}
                    value={good.location}
                    onChange={(value) => updateGood(index, "location", value)}
                  />
                </div>
              )}
              {[
                "União com comunhão universal de bens",
                "União com comunhão parcial de bens",
                "União com separação obrigatória de bens",
              ].includes(maritalStatus) && (
                <div className="w-full grid-cols-2 flex gap-4 pb-3">
                  <Dropdown
                    label="Adquirido depois da união?"
                    options={["Sim", "Não"]}
                    value={good.acquiredAfterUnion}
                    onChange={(value) =>
                      updateGood(index, "acquiredAfterUnion", value)
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto w-full flex flex-col sm:flex-row h-auto sm:h-24 items-center justify-between p-4 md:pr-8 border border-[#BCC0C2] rounded-2xl bg-white gap-4">
          <span className="text-base text-[#7F8FA2] font-inter font-semibold text-center sm:text-left">
            Calcule Agora Mesmo Seus Custos!
          </span>
          <div className="flex gap-4 w-full sm:w-auto">
            <div className="w-1/2 sm:w-32">
              <SquaredButton
                color="#20BFFA"
                text="Calcular"
                onClick={async () => {
                  const result = await calculateTaxes({
                    email: email,
                    firstName: name.split(' ')[0],
                    lastName: name.split(' ').slice(1).join(' '),
                    phone: phone,
                    maritalStatus: maritalStatus as MaritalStatusType,
                    stateOfResidence: stateOfResidence as LocationType,
                    goods,
                  });
                  navigate("/output", { state: { result } });
                }}
                disabled={!isFormValid()}
                tooltipText={getFormValidationMessage()}
              />
            </div>
            <div className="w-1/2 sm:w-32">
              <SquaredButton
                color="#ADE0F3"
                text="Limpar"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
