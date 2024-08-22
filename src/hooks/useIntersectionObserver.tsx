import { useEffect, useState, useRef, MutableRefObject } from "react";

const useIntersectionObserver = ({ threshold = 0.1 }): [MutableRefObject<HTMLElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useIntersectionObserver;
