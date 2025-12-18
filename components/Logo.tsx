
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
  variant?: 'standard' | 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 48, glow = true, variant = 'standard' }) => {
  const primaryColor = variant === 'standard' ? '#FACC15' : variant === 'white' ? '#FFFFFF' : '#000000';
  const secondaryColor = variant === 'standard' ? '#FFFFFF' : variant === 'white' ? '#FFFFFF' : '#000000';

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {glow && variant === 'standard' && (
        <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full scale-125 animate-pulse"></div>
      )}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 overflow-visible"
      >
        {/* Outer Tech Frame */}
        <path 
          d="M50 8L88 28V72L50 92L12 72V28L50 8Z" 
          stroke={primaryColor} 
          strokeWidth="4" 
          strokeLinejoin="round"
          className={variant === 'standard' ? "drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]" : ""}
        />
        
        {/* Core Legal Pillar / 'M' Shape */}
        <path 
          d="M30 75V25L50 45L70 25V75" 
          stroke={secondaryColor} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Balance Beam (Tech nodes) */}
        <path d="M20 35H80" stroke={primaryColor} strokeWidth="2" strokeDasharray="4 2"/>
        <circle cx="20" cy="35" r="3" fill={primaryColor} />
        <circle cx="80" cy="35" r="3" fill={primaryColor} />
        
        {/* Foundation Base */}
        <path d="M40 82H60" stroke={primaryColor} strokeWidth="4" strokeLinecap="round"/>
        
        {/* Center Point of Equilibrium */}
        <circle cx="50" cy="45" r="4" fill={primaryColor} className="animate-pulse" />
      </svg>
    </div>
  );
};

export default Logo;
