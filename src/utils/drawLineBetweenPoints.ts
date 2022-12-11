import { Point } from '../main';

export function drawLineBetweenPoints(
  p1: Point,
  p2: Point,
  ctx: CanvasRenderingContext2D
) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  ctx.closePath();
}
