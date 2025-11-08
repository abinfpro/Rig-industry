import { useRef, useEffect } from 'react';

export const useMagneticEffect = (strength: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const maxDistance = Math.max(rect.width, rect.height);
      
      if (distance < maxDistance) {
        const translateX = distanceX * strength;
        const translateY = distanceY * strength;
        
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};
