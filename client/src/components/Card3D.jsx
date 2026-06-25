import React, { useRef, useState } from 'react';

const Card3D = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative position within card (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Rotation limits (degrees)
  const maxRotate = 15;
  const rotateX = -coords.y * maxRotate;
  const rotateY = coords.x * maxRotate;

  const style = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` 
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'none' : 'transform 0.5s ease',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative rounded-3xl overflow-hidden glass-panel transition-shadow duration-300 ${
        isHovered ? 'shadow-[0_15px_35px_rgba(94,234,212,0.15)] border-teal-400/40' : 'shadow-lg border-teal-950'
      } ${className}`}
    >
      {/* 3D Reflection Glare Overlay */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle 250px at ${(coords.x + 0.5) * 100}% ${(coords.y + 0.5) * 100}%, rgba(255,255,255,0.08), transparent)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Card3D;
