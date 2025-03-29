interface DisabledCheckIconProps {
  className?: string;
}

const DisabledCheckIcon: React.FC<DisabledCheckIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
      fill="currentColor"
    >
      <path d="M250,41.7c-115,0-208.3,93.3-208.3,208.3s93.3,208.3,208.3,208.3,208.3-93.3,208.3-208.3S365,41.7,250,41.7ZM344,321.5l-22.6,22.5c-4.1,4.1-10.9,4.1-15,0l-56.4-56.4-56.4,56.4c-4.1,4.1-10.9,4.1-15,0l-22.6-22.5c-4.1-4.2-4.1-10.9,0-15.1l56.4-56.4-56.3-56.3c-4.1-4.2-4.1-10.9,0-15.1l22.5-22.5c4.1-4.2,10.9-4.2,15.1,0l56.3,56.3,56.4-56.3c4.1-4.2,10.9-4.2,15,0l22.6,22.5c4.1,4.2,4.1,10.9,0,15.1l-56.4,56.3,56.4,56.4c4.1,4.2,4.1,10.9,0,15.1Z" />
    </svg>
  );
};

export default DisabledCheckIcon;
