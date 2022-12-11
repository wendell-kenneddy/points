import { Point } from '../main';

export function drawCoordinates(point: Point, ctx: CanvasRenderingContext2D) {
  const { x, y } = point;

  ctx.fillText(`X: ${Math.round(x)}; Y: ${Math.round(y)}`, x + 15, y + 10);
}
