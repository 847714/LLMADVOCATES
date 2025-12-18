
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
        <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-150 animate-pulse"></div>
      )}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Hexagonal Frame */}
        <path 
          d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z" 
          stroke={primaryColor} 
          strokeWidth="3" 
          strokeLinejoin="round"
          className={variant === 'standard' ? "drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" : ""}
        />
        
        {/* Circuit Traces (Tech Side) */}
        <path 
          d="M10.5 40H20M10.5 60H20M89.5 40H80M89.5 60H80" 
          stroke={primaryColor} 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <circle cx="23" cy="40" r="2" fill={primaryColor} />
        <circle cx="23" cy="60" r="2" fill={primaryColor} />
        <circle cx="77" cy="40" r="2" fill={primaryColor} />
        <circle cx="77" cy="60" r="2" fill={primaryColor} />

        {/* Legal Symbol - Minimalist Scale/Gavel Fusion */}
        <path 
          d="M35 70V30L50 45L65 30V70" 
          stroke={secondaryColor} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* The Gavel Head / Balance beam */}
        <path 
          d="M25 35H75" 
          stroke={primaryColor} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Base of the 'M' / Law Pillar */}
        <path 
          d="M42 75H58" 
          stroke={primaryColor} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Accent dot */}
        <circle cx="50" cy="45" r="3" fill={primaryColor} />
      </svg>
    </div>
  );
};

export default Logo;
