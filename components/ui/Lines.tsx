"use client";

import { useEffect, useState } from "react";

const Lines = () => {
  const [mainHeight, setMainHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const mainElement = document.getElementById("main-content");
      if (mainElement) {
        setMainHeight(mainElement.scrollHeight);
      }
    };

    const mainElement = document.getElementById("main-content");

    if (mainElement) {
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(mainElement);

      // Appel initial pour définir la hauteur
      updateHeight();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <div
      className="flex justify-evenly absolute w-full pointer-events-none"
      style={{ height: mainHeight }}
    >
      <div className="w-px bg-border_color -z-10"></div>
      <div className="w-px bg-border_color -z-10"></div>
      <div className="w-px bg-border_color -z-10"></div>
      <div className="w-px bg-border_color -z-10"></div>
    </div>
  );
};

export default Lines;