import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    document.addEventListener('mousemove', handleMouseMove);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className={`w-5 h-5 border border-green-400 rounded-full transition-all duration-200 ${
            isHovering 
              ? 'scale-150 shadow-[0_0_20px_rgba(0,255,65,0.8)]' 
              : 'shadow-[0_0_10px_rgba(0,255,65,0.4)]'
          }`}
          style={{
            backgroundColor: isHovering ? 'rgba(0,255,65,0.2)' : 'transparent',
          }}
        />
      </div>
      
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`w-1 h-1 bg-green-400 rounded-full transition-all duration-200 ${
            isHovering ? 'scale-125' : ''
          }`}
          style={{
            boxShadow: '0 0 8px rgba(0,255,65,0.8)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;