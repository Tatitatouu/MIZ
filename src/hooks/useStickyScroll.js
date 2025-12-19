import { useState, useEffect, useRef } from 'react';

export const useStickyScroll = (itemCount) => {
  const [stickyStates, setStickyStates] = useState(Array(itemCount).fill(false));
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.pageYOffset;
      const containerTop = containerRef.current.offsetTop;
      const headerOffset = 60;

      const newStickyStates = [];

      for (let index = 0; index < itemCount; index++) {
        const stepElement = stepRefs.current[index];
        if (!stepElement) {
          newStickyStates.push(false);
          continue;
        }

        const stepTop = stepElement.offsetTop + containerTop;
        const shouldStick = scrollTop + headerOffset >= stepTop;
        
        newStickyStates.push(shouldStick);
      }

      // Only update if states have changed
      const statesChanged = newStickyStates.some((state, idx) => state !== stickyStates[idx]);
      if (statesChanged) {
        setStickyStates(newStickyStates);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Delay initial check to ensure DOM is ready
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickyStates, itemCount]);

  return { stickyStates, containerRef, stepRefs };
};
