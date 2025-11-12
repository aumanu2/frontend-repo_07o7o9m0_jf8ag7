"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;

    const stars = Array.from({ length: 200 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      s: Math.random() * 1.2 + 0.2,
    }));

    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const px = star.x * width;
        const py = star.y * height;
        const alpha = 0.6 + Math.sin((star.x + star.y + star.z) * 20) * 0.4;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(px, py, star.s, star.s);
        star.z += 0.002;
        if (star.z > 1) star.z = 0;
      }
      animationFrame = requestAnimationFrame(render);
    };

    const onResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.scale(dpr, dpr);
    };
    onResize();
    window.addEventListener("resize", onResize);
    render();
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-starfield" aria-hidden />;
}
