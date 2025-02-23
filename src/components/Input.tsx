interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  step?: number
  required?: boolean
  min?: number
}

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  step,
  required = true
}: InputProps) => {
  return (
    <div className="w-full block">
      <div>
        <label className="block mb-2 text-xs font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        step={step}
        min={type === 'number' ? 0 : undefined}
        required={required}
        className="bg-no-repeat appearance-none w-full bg-[#F0F6FF] block rounded border-transparent text-xs outline-2 outline-[#BCC0C2] focus:outline-[#20BFFA] font-semibold p-4"
      />
    </div>
  )
}

export default Input
