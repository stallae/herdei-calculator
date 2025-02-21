import {useState} from 'react';

interface SquaredButtonProps {
    color: string;
    text: string;
    onClick: () => void;
}

const SquaredButton = ({color, text, onClick}: SquaredButtonProps) => {
    const [isRippling, setIsRippling] = useState(false);

    const handleClick = () => {
        setIsRippling(true);
        onClick();
        setTimeout(() => setIsRippling(false), 20); // Reset after 300ms
    };

    return (
        <button
            onClick={handleClick}
            style={{opacity: isRippling ? 0 : 1, backgroundColor: color}}
            className={`w-full h-10/12 text-sm rounded-lg text-[#001F2B] font-semibold self-center`}
        >
            {text}
        </button>
    );
};

export default SquaredButton;
