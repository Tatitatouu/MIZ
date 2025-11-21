import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsap = (animationFn, dependencies = []) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && animationFn) {
      animationFn(ref.current);
    }

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, dependencies);

  return ref;
};
