interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  // Ensure percentage is between 0 and 100
  const validPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-[#20BFFA] h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${validPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
