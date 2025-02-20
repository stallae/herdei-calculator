interface DropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

const Dropdown = ({ label, options, value, onChange }: DropdownProps) => {
    return (
        <div className="w-full block">
            <div><label className="block mb-2 text-xs font-medium">{label}</label></div>
            <select 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={` w-full bg-[#F0F6FF] block rounded border-r-8 border-transparent text-xs outline-2 outline-[#BCC0C2] focus:outline-[#20BFFA] font-semibold p-4 ${!value ? 'text-gray-400' : ''}`}
            >
                <option value="" disabled>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;