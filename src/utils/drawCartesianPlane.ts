export function drawCartesianPlane(
  canvasW: number,
  canvasH: number,
  ctx: CanvasRenderingContext2D
) {
  ctx.beginPath();
  ctx.moveTo(Math.round(-canvasW), 0);
  ctx.lineTo(Math.round(canvasW), 0);
  ctx.moveTo(0, Math.round(-canvasH));
  ctx.lineTo(0, Math.round(canvasH));
  ctx.stroke();
  ctx.closePath();
}
