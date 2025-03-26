const CloseIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        fill="currentColor"
      >
        <path d="M7 4c-.26 0-.52.1-.71.29L4.29 6.29a1 1 0 0 0 0 1.42L11.59 15l-7.3 7.29a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0L15 18.41l7.29 7.3a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 0-1.42L18.41 15l7.3-7.29a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0L15 11.59 7.71 4.29A1 1 0 0 0 7 4z" />
      </svg>
    );
  };
  
  export default CloseIcon;