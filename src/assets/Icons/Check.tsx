const CheckIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm3.75 7c.32 0 .64.12.88.37.49.49.49 1.28 0 1.77l-4.75 4.75c-.24.24-.56.36-.88.36s-.64-.12-.88-.36l-2.76-2.76a1.25 1.25 0 0 1 1.77-1.77L11 13.23l3.87-3.87c.24-.24.56-.36.88-.36z" />
      </svg>
    );
  };
  
  export default CheckIcon;