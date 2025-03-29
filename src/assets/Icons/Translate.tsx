interface TranslateIconProps {
    className?: string;
  }
  
  const TranslateIcon: React.FC<TranslateIconProps> = ({ className }) => {
    return (
      <svg
        className={className}
        fill="currentColor"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14H5v-2h6v2zm8-4H5v-2h14v2zm0-4H5V7h14v2z"/>
      </svg>
    );
  };
  
  export default TranslateIcon;
  