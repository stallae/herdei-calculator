import { useState, useEffect, useCallback } from "react";
import SquaredButton from "./SquaredButton";

interface TooltipButtonProps {
  color: string;
  text: string;
  onClick: () => void;
  disabled: boolean;
  tooltipText: string;
}

const TooltipButton = ({
  color,
  text,
  onClick,
  disabled,
  tooltipText,
}: TooltipButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = useCallback(() => {
    if (disabled) {
      setShowTooltip(true);
      if (isMobile) {
        // Hide tooltip after 3 seconds on mobile
        setTimeout(() => setShowTooltip(false), 3000);
      }
    }
  }, [disabled, isMobile]);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => !isMobile && handleInteraction()}
        onMouseLeave={() => !isMobile && setShowTooltip(false)}
        onClick={() => isMobile && handleInteraction()}
        onTouchStart={() => isMobile && handleInteraction()}
      >
        <SquaredButton
          color={color}
          text={text}
          onClick={onClick}
          disabled={disabled}
        />
      </div>
      {showTooltip && disabled && (
        <div
          className={`
            absolute z-50 transform
            ${isMobile ? "bottom-full left-0 right-0 mx-auto mb-2" : "bottom-full left-1/2 -translate-x-1/2 mb-2"}
            w-full md:w-64 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 text-center
            shadow-lg
          `}
        >
          {tooltipText}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-solid border-4 border-transparent border-t-gray-800" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TooltipButton;
