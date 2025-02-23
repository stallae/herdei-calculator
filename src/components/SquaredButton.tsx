import { useState } from 'react'

interface SquaredButtonProps {
  color: string
  text: string
  onClick: () => void
  disabled?: boolean
}

const SquaredButton = ({
  color,
  text,
  onClick,
  disabled = false
}: SquaredButtonProps) => {
  const [isRippling, setIsRippling] = useState(false)

  const handleClick = () => {
    setIsRippling(true)
    onClick()
    setTimeout(() => setIsRippling(false), 20) // Reset after 300ms
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{ opacity: isRippling ? 0 : 1, backgroundColor: color }}
      className={`w-full h-full rounded-xl text-white font-semibold text-sm ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : `bg-[${color}] hover:opacity-90`
      }`}
    >
      {text}
    </button>
  )
}

export default SquaredButton
