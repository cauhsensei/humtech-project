import { useState, useEffect, useRef, RefObject } from 'react';

interface Options extends IntersectionObserverInit {}

export const useOnScreen = (options?: Options): [RefObject<Element>, boolean] => {
  const ref = useRef<Element>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};