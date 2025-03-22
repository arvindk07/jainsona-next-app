"use client"
import React, { useEffect, useState, useRef } from "react";

const Stats = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const statsData = [
    { label: "Years Established", value: 39 },
    { label: "Products", value: 10000 },
    { label: "Customers", value: 1000 },
    { label: "Awards Won", value: 5 },
  ];

  const [stats, setStats] = useState(statsData.map(() => ({ value: 0 })));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCount) {
      statsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // Duration of the count animation (2 seconds)
        const increment = end / (duration / 50); // Calculate increment per interval

        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setStats((prevStats) =>
            prevStats.map((item, i) =>
              i === index ? { value: Math.ceil(start) } : item
            )
          );
        }, 50);
      });
    }
  }, [startCount]);

  return (
    <section ref={statsRef} className="px-4 py-10 md:px-10 md:py-20  bg-[#880909] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-3xl font-bold">
                {index === 1 ? `${stat.value.toLocaleString()}+` : stat.value + "+"}
              </h3>
              <p className="mt-2">{statsData[index].label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
