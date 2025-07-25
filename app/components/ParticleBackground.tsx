"use client";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineLoaded(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "#1a202c" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { value: 80, density: { enable: true } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!engineLoaded) {
    return null;
  }

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
