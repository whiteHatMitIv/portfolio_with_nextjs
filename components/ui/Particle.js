"use client"


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 


const ParticlesComponent = ({id, color = "#FFF"}) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        // events: {
        //   onClick: {
        //     enable: true,
        //     mode: "push",
        //   },
        //   onHover: {
        //     enable: true,
        //     mode: 'repulse',
        //     parallax: {
        //       enable: false, 
        //       force: 60,
        //       smooth: 10
        //     }
        //   },
        //   resize: true
        // },
        // modes: {
        //   push: {
        //     quantity: 4
        //   },
        //   repulse: {
        //     distance: 60,
        //     duration: 5
        //   },
        // },
      },
      particles: {
        color: {
          value: color,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 180,
        },
        opacity: {
          animation: {
            enable: false,
            // speed: 0.05,
            // sync: true, 
            // startValue: "max",
            // count: 1,
            // destroy: "min"
          },
          value: 0.7,
          // value: {
          //   min: 0,
          //   max: 0.5
          // }
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    [color],
  );


  return <Particles id={id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;