import React, { useState, useEffect } from "react";

export const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="window-size-container">
      <h2 className="window-size-title">Размер окна</h2>
      <p className="window-size-info">Ширина: {windowSize.width}px</p>
      <p className="window-size-info">Высота: {windowSize.height}px</p>
    </div>
  );
};
