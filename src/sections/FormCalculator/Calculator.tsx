import {useState} from 'react';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import SquaredButton from '../../components/SquaredButton';
import {Location, MaritalStatus, PropertyType} from '../../configuration/FormConstants';
import {useNavigate} from 'react-router-dom';
import {calculateTaxes} from '../../services/calculatorService';
import {handleClear} from '../../utils/formHandlers';

interface Good {
    type: string;
    value: string;
    location: string;
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

    const handleNumberOfGoodsChange = (value: string) => {
        const num = parseInt(value) || 0;
        setNumberOfGoods(value);
        setGoods(Array(num).fill(null).map(() => ({
            type: "",
            value: "",
            location: "",
            acquiredAfterUnion: ""
        })));
    };

    const updateGood = (index: number, field: string, value: string) => {
        const updatedGoods = [...goods];
        updatedGoods[index] = {...updatedGoods[index], [field]: value};
        setGoods(updatedGoods);
    };

    const isFormValid = () => {
        if (!maritalStatus || !stateOfResidence || !numberOfGoods) return false;
        if (!name || !email || !phone) return false;
        
        return goods.every(good => {
            if (!good.type || !good.value) return false;
            if (good.type === "Imóvel" && !good.location) return false;
            if (["União com comunhão universal de bens", "União com comunhão parcial de bens", "União com separação obrigatória de bens"]
                .includes(maritalStatus) && !good.acquiredAfterUnion) return false;
            return true;
        });
    };

    return (
        <div id="simulador" className="h-fill w-screen bg-[#20BFFA] flex flex-col items-center gap-10 p-5 md:p-10">
            <div className="text-3xl font-bold w-10/12">
                <span className="text-white">CALCULADORA</span><br/>
                <span className="text-white">DE </span>
                <span className="text-black">IMPOSTOS</span>
            </div>
            <div className="grid bg-white w-11/12 gap-4 rounded-2xl p-5 py-10 md:p-15 overflow-auto">
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
                                    onChange={(value) => updateGood(index, 'type', value)}
                                    required={true}
                                />

                                <Input
                                    label="Valor do Bem"
                                    type="number"
                                    value={good.value}
                                    onChange={(value) => updateGood(index, 'value', value)}
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
                                        onChange={(value) => updateGood(index, 'location', value)}
                                    />
                                </div>
                            )}
                            {["União com comunhão universal de bens", "União com comunhão parcial de bens", "União com separação obrigatória de bens"].includes(maritalStatus) && (
                                <div className="w-full grid-cols-2 flex gap-4 pb-3">
                                    <Dropdown
                                        label="Adquirido depois da união?"
                                        options={["Sim", "Não"]}
                                        value={good.acquiredAfterUnion}
                                        onChange={(value) => updateGood(index, 'acquiredAfterUnion', value)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div
                    className="mt-auto w-full flex flex-col sm:flex-row h-[160px] sm:h-25 items-center justify-between p-4 border border-[#BCC0C2] rounded-2xl bg-white gap-4 sm:gap-0">
                    <span className="text-base text-[#7F8FA2] font-inter font-semibold text-center sm:text-left">
                        Calcule Agora Mesmo Seus Custos!
                    </span>
                    <div className="flex gap-2 w-full sm:w-1/4 h-[120px] sm:h-full">
                        <SquaredButton
                            color="#20BFFA"
                            text="Calcular"
                            onClick={() => {
                                const result = calculateTaxes({
                                    maritalStatus,
                                    stateOfResidence,
                                    goods
                                });
                                navigate('/output', {state: {result}});
                            }}
                            disabled={!isFormValid()}
                        />
                        <SquaredButton
                            color="#ADE0F3"
                            text="Limpar"
                            onClick={handleClear}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
