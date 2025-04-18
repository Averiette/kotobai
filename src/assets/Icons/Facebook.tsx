const FacebookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="50"
      height="50"
    >
      <path
        fill="#b6b6b6"
        d="M466.7,33.3v433.3h-144.5v-153.5h54.2l9-63.2h-63.2v-45.1c0-17.2,10.3-36.1,36.1-36.1h36.1v-54.2s-16.9-9-45.1-9-7.1.2-10.6.5c-48.2,4.4-79.7,39.8-79.7,98.8v45.1h-54.2v63.2h54.2v153.5H33.3V33.3h433.3Z"
      />
    </svg>
  );
};

export default FacebookIcon;