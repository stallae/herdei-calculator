interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Dropdown = ({
  label,
  options,
  value,
  onChange,
  required = true,
}: DropdownProps) => {
  return (
    <div className="w-full block">
      <div>
        <label className="block mb-2 text-xs font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="bg-no-repeat appearance-none w-full bg-[#F0F6FF] block rounded border-transparent text-xs outline-2 outline-[#BCC0C2] focus:outline-[#20BFFA] font-semibold p-4"
      >
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
