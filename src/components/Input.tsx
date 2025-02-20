interface InputProps {
    label: string;
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
}

const Input = ({ label, onChange, value, placeholder }: InputProps) => {
    return (
        <div className="w-full block">
            <div><label className="block mb-2 text-xs font-medium">{label}</label></div>
            <input 
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="bg-no-repeat appearance-none w-full bg-[#F0F6FF] block rounded border-transparent text-xs outline-2 outline-[#BCC0C2] focus:outline-[#20BFFA] font-semibold p-4"
            />
        </div>
    )
}

export default Input; 