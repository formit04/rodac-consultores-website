import React from 'react';

const Logo = ({ className = "brand-circle-logo", size = "40" }) => {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical bar (left side of R) */}
      <rect x="15" y="15" width="12" height="70" fill="currentColor"/>
      
      {/* Top horizontal bar */}
      <rect x="15" y="15" width="50" height="12" fill="currentColor"/>
      
      {/* Diagonal leg (bottom right) */}
      <polygon 
        points="35,45 65,85 75,80 45,40" 
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo; 