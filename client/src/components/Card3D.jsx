import React, { useRef } from 'react';

const Card3D = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  const handleMove = (clientX, clientY) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    
    // Relative position within card clamped between -0.5 and 0.5
    const x = Math.max(-0.5, Math.min(0.5, (clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (clientY - rect.top) / rect.height - 0.5));

    // Update CSS variables directly on the element style (bypasses React state re-renders)
    card.style.setProperty('--x', x);
    card.style.setProperty('--y', y);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleStart = () => {
    const card = cardRef.current;
    if (!card) return;
    card.classList.add('card-hovered');
  };

  const handleTouchStart = (e) => {
    handleStart();
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleEnd = () => {
    const card = cardRef.current;
    if (!card) return;
    card.classList.remove('card-hovered');
    card.style.setProperty('--x', '0');
    card.style.setProperty('--y', '0');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleStart}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      className={`card-3d relative rounded-3xl overflow-hidden glass-panel ${className}`}
    >
      {/* 3D Reflection Glare Overlay */}
      <div className="card-glare absolute inset-0 pointer-events-none z-10" />
      {children}
    </div>
  );
};

export default Card3D;
