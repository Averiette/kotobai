interface AttackIconProps {
    className?: string;
  }
  
  const AttackIcon: React.FC<AttackIconProps> = ({ className = "" }) => {
    return (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.617 14.496a1 1 0 0 1 1.414 1.414l-3.182 3.182a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 1 1 7.07 7.07l-5.656 5.658a3 3 0 0 1-4.243-4.243l4.596-4.596a1 1 0 1 1 1.415 1.414l-4.597 4.596a1 1 0 1 0 1.415 1.414l5.656-5.657a3 3 0 1 0-4.242-4.242l-5.657 5.657a5 5 0 1 0 7.071 7.07l3.182-3.181z"
          fill="currentColor"
        />
      </svg>
    );
  };
  
  export default AttackIcon;
  