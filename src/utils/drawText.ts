import { Point } from '../main';

export function drawText(
  text: string,
  position: Point,
  ctx: CanvasRenderingContext2D
) {
  ctx.fillText(text, position.x, position.y);
}
