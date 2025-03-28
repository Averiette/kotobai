interface ArrowIconProps {
    size?: number;
    color?: string;
    className?: string;
  }
  
  const ArrowIcon: React.FC<ArrowIconProps> = ({ size = 24, color = "#ffffff", className }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default ArrowIcon;