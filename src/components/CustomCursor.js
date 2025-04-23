import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <>
            <div 
                className="cursor-dot"
                style={{ 
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: isVisible ? 1 : 0
                }}
            />
            <div 
                className="cursor-outline"
                style={{ 
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: isVisible ? 1 : 0
                }}
            />
        </>
    );
};

export default CustomCursor;