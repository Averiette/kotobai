interface BackIconProps {
    className?: string;
  }
  
  const BackIcon: React.FC<BackIconProps> = ({ className }) => {
    return (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default BackIcon;
  