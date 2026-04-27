import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 1200, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutQuart easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="bg-brand py-16 text-white relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <div className="animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={1200} suffix="+" />
            </div>
            <div className="text-pink-200 text-sm md:text-base font-medium">Babies Born</div>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={68} suffix="%" />
            </div>
            <div className="text-pink-200 text-sm md:text-base font-medium">Success Rate</div>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className="text-pink-200 text-sm md:text-base font-medium">Years Experience</div>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-pink-200 text-sm md:text-base font-medium">Transparency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
