import React, { useState } from 'react'

interface RoundedButtonProps {
  text: string
  onClick: () => void
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  onClick
}: RoundedButtonProps) => {
  const [isRippling, setIsRippling] = useState(false)

  const handleClick = () => {
    setIsRippling(true)
    onClick()
    setTimeout(() => setIsRippling(false), 300) // Reset after 300ms
  }

  return (
    <button
      onClick={handleClick}
      style={{ opacity: isRippling ? 0 : 1 }}
      className="bg-[#ABE0F3] text-black w-full md:w-1/2 p-2 rounded-full h-15"
    >
      {text}
    </button>
  )
}

export default RoundedButton
