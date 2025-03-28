interface UpgradeIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const UpgradeIcon: React.FC<UpgradeIconProps> = ({ size = 24, color = "#currentColor", className }) => {
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
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
      />
    </svg>
  );
};

export default UpgradeIcon;
