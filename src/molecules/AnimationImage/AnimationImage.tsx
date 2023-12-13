import { useEffect, useRef } from 'react';

import { hexToRgb } from 'utils/functions';

import type { FC } from 'react';

type AnimationImageProps = {
  startColor: string;
  endColor: string;
};

const AnimationImage: FC<AnimationImageProps> = ({ startColor, endColor }) => {
  const startRGB = hexToRgb(startColor);
  const endRGB = hexToRgb(endColor);
  const imgRef = useRef<HTMLCanvasElement>(null);

  const col = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, g: number, b: number) => {
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x, y, 1, 1);
  };

  const R = (x: number, y: number, t: number) =>
    Math.floor(
      startRGB.r +
        (endRGB.r - startRGB.r) * Math.sin(0.5 * Math.sin(t / 9) + ((x * x + (y - 20) * (y - 20)) / 4000) * Math.PI),
    ) *
    Math.sin(((y * y) / 1800) * Math.PI) *
    Math.sin(((y + 10 * Math.sin(t / 4)) / 50) * Math.PI) *
    Math.sin((((x - 20) * (x - 20)) / (600 + 200 * Math.sin(t / 2))) * Math.PI);

  const G = (x: number, y: number, t: number) =>
    Math.floor(
      startRGB.g +
        (endRGB.g - startRGB.g) * Math.sin(0.3 * Math.sin(t / 6) + ((x * x + (y - 20) * (y - 20)) / 4000) * Math.PI),
    ) *
    Math.sin(((y * y) / 1800) * Math.PI) *
    Math.sin(((y + 10 * Math.sin(t / 4)) / 50) * Math.PI) *
    Math.sin((((x - 20) * (x - 20)) / (600 + 200 * Math.sin(t / 6))) * Math.PI);

  const B = (x: number, y: number, t: number) =>
    Math.floor(
      startRGB.b +
        (endRGB.b - startRGB.b) * Math.sin(5 * Math.sin(t / 9) + ((x * x + (y - 20) * (y - 20)) / 4000) * Math.PI),
    ) *
    Math.sin(((y * y) / 1800) * Math.PI) *
    Math.sin(((y + 10 * Math.sin(t / 4)) / 50) * Math.PI) *
    Math.sin((((x - 20) * (x - 20)) / (600 + 200 * Math.sin(t / 4))) * Math.PI);

  useEffect(() => {
    let t = 0;
    let requestFrame: number;
    if (imgRef.current) {
      const canvas = imgRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const run = () => {
          for (let x = 0; x <= 40; x++) {
            for (let y = 0; y <= 40; y++) {
              col(ctx, x, y, R(x, y, t), G(x, y, t), B(x, y, t));
            }
          }
          t = t + 0.02;
          requestFrame = window.requestAnimationFrame(run);
        };
        run();
      }
    }

    return () => {
      requestFrame && window.cancelAnimationFrame(requestFrame);
    };
  }, [startColor, endColor]);

  return <canvas width={40} height={40} ref={imgRef} />;
};
export default AnimationImage;
