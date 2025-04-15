interface PracticeIconProps {
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

const PracticeIcon: React.FC<PracticeIconProps> = ({
  size = 24,
  strokeColor = "currentColor",
  strokeWidth = 45,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    >
      <path
        d="M250,450h0c-2.3,0-4.6-.4-6.8-1.1h0c-1.2-.4-2.4-.9-3.5-1.5-.8-.4-1.6-.9-2.4-1.4l-39.4-26.2c-8.9-5.9-13.3-8.9-16.9-10.5-3.2-1.4-6.6-2.4-10-3-3.9-.7-9.2-.7-19.9-.7h-65.5c-14.5,0-24,0-33.5-4.8-8.4-4.3-15.1-11-19.4-19.4-4.8-9.5-4.8-19.1-4.8-33.5V107.8c0-14.5,0-24,4.8-33.5,4.3-8.4,11-15.1,19.4-19.4,9.5-4.8,19.1-4.8,33.5-4.8h22.2c53.3,0,80,0,103.8,12.1,15.3,7.8,28.3,18.8,38.4,32.3,10.1-13.5,23.2-24.5,38.4-32.3,23.8-12.1,50.5-12.1,103.8-12.1h22.2c14.5,0,24,0,33.5,4.8,8.4,4.3,15.1,11,19.4,19.4,4.8,9.5,4.8,19.1,4.8,33.5v240c0,14.5,0,24-4.8,33.5-4.3,8.4-11,15.1-19.4,19.4-9.5,4.8-19.1,4.8-33.5,4.8h-65.5c-10.7,0-16,0-19.9.7-3.4.6-6.8,1.6-10,3-3.5,1.5-7.5,4.1-17,10.5l-39.4,26.3c-.7.5-1.4,1-2.2,1.4-1.2.6-2.5,1.2-3.8,1.6h0c-2.2.7-4.4,1-6.6,1h0Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default PracticeIcon;
