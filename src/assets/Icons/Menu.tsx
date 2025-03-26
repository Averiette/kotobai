import React from "react";

const MenuIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      width="50"
      height="50"
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="80"
        d="M133.3,200h533.3M133.3,400h533.3M133.3,600h533.3"
      />
    </svg>
  );
};

export default MenuIcon;
