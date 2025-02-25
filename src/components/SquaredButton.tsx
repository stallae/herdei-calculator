import { useState, useEffect } from 'react'

interface SquaredButtonProps {
  color: string
  text: string
  onClick: () => void
  disabled?: boolean
  tooltipText?: string
}

const SquaredButton = ({
  color,
  text,
  onClick,
  disabled = false,
  tooltipText
}: SquaredButtonProps) => {
  const [isRippling, setIsRippling] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleInteraction = () => {
    if (disabled && tooltipText) {
      setShowTooltip(true)
      if (isMobile) {
        setTimeout(() => setShowTooltip(false), 3000)
      }
    }
  }

  const handleClick = () => {
    setIsRippling(true)
    onClick()
    setTimeout(() => setIsRippling(false), 20)
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={disabled}
        onMouseEnter={handleInteraction}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={handleInteraction}
        style={{ opacity: isRippling ? 0 : 1, backgroundColor: color }}
        className={`w-full h-12 md:h-14 rounded-xl text-white font-semibold px-4 text-sm ${
          disabled ? 'bg-gray-300 cursor-not-allowed' : `bg-[${color}] hover:opacity-90`
        }`}
      >
        {text}
      </button>
      {showTooltip && disabled && tooltipText && (
        <div className={`
          absolute z-50 transform
          ${isMobile ? 'bottom-full left-0 right-0 mx-2' : 'bottom-full left-1/2 -translate-x-1/2'}
          mb-2 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 text-center
          shadow-lg
        `}>
          {tooltipText}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-solid border-4 border-transparent border-t-gray-800" />
          </div>
        </div>
      )}
    </div>
  )
}

export default SquaredButton
