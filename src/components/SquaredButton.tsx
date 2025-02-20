interface SquaredButtonProps {
    color: string;
    text: string;
    onClick: () => void;
}

const SquaredButton = ({ color, text, onClick }: SquaredButtonProps) => {
    return (
        <button 
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="w-full h-10/12 text-sm rounded-lg text-[#001F2B] font-semibold self-center"
        >
            {text}
        </button>
    )
}

export default SquaredButton;

