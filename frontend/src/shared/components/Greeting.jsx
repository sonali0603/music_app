import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay('Good Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setTimeOfDay('Good Afternoon');
      } else {
        setTimeOfDay('Good Evening');
      }
    };

    updateGreeting(); // Set initial greeting
    const intervalId = setInterval(updateGreeting, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <header style={{ textAlign: 'right', padding: '10px' }} >
      <h2 style={{mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              }}>{timeOfDay}</h2>
    </header>
  );
};

export default Greeting;
