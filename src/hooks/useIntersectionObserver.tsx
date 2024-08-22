import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = ({ threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
