"use client";
import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouse = { x: -1000, y: -1000 };
    let smoothMouse = { x: -1000, y: -1000 };

    const gridSize = 60; // box size
    const fadeRadius = gridSize * 4; // radius effect scales with box size

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // only draw when hovering inside
      if (mouse.x === -1000 && mouse.y === -1000) return;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dist = Math.hypot(smoothMouse.x - x, smoothMouse.y - y);
          const intensity = Math.max(0, 1 - dist / fadeRadius);

          ctx.strokeStyle = `rgba(100, 100, 100, ${intensity * 0.6})`;
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }

      // draw cursor dot
      ctx.beginPath();
      ctx.arc(smoothMouse.x, smoothMouse.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#333";
      ctx.fill();
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function animate() {
      // smooth chasing effect
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.07;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.07;

      drawGrid();
      requestAnimationFrame(animate);
    }

    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    // Init
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );
}
