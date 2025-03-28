interface LockIconProps {
    size?: number;
    className?: string;
  }
  
  const LockIcon: React.FC<LockIconProps> = ({ size = 24, className }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M52,24h-4v-8c0-8.836-7.164-16-16-16S16,7.164,16,16v8h-4c-2.211,0-4,1.789-4,4v32c0,2.211,1.789,4,4,4h40
          c2.211,0,4-1.789,4-4V28C56,25.789,54.211,24,52,24z M32,48c-2.211,0-4-1.789-4-4s1.789-4,4-4s4,1.789,4,4S34.211,48,32,48z 
          M40,24H24v-8c0-4.418,3.582-8,8-8s8,3.582,8,8V24z"/>
      </svg>
    );
  };
  
  export default LockIcon;
  