import React, { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
      if (timeLeft <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card">
      <h1 className="card-title">Таймер обратного отсчета</h1>
      <h2 className="timer-text">
        {timeLeft <= 0 ? " Время истекло" : timeLeft}
      </h2>
    </div>
  );
};
