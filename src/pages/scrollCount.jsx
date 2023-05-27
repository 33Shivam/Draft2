import React, { useRef, useEffect, useState } from 'react';

const ScrollCount = ({ value, speed }) => {
  const countRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && count === 0) {
        startCountAnimation();
      }
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [count]);

  const calculateDuration = () => {
    const commonDuration = 3000; // Set a common duration for all animations in milliseconds
    const duration = Math.ceil(value / speed) * commonDuration;
    return duration;
  };

  const startCountAnimation = () => {
    const duration = calculateDuration();
    const increment = Math.ceil(value / duration) * speed;

    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < value) {
        currentCount += increment;
        setCount(currentCount > value ? value : currentCount);
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  return <div ref={countRef}>{count >= value ? `${value}+` : count}</div>;
};

export default ScrollCount;