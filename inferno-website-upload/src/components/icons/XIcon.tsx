import React from "react";

const XIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
  >
    <path d="M17.446 3H21L14.74 10.278 22.242 21h-6.463l-4.49-6.17L6.06 21H2l6.803-7.832L1.757 3h6.583l4.08 5.741L17.446 3Zm-1.129 17h1.526L7.74 4H6.085l10.232 16Z" />
  </svg>
);

export default XIcon;
