export function calculateRealMousePosition(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  eM: MouseEvent,
  translated?: boolean
) {
  const scaleX = canvas.width / canvas.clientWidth;
  const scaleY = canvas.height / canvas.clientHeight;
  let x = 0;
  let y = 0;

  x = eM.offsetX * scaleX;
  y = eM.offsetY * scaleY;

  if (translated) {
    const { e, f } = ctx.getTransform();
    x -= e;
    y -= f;
  }

  return { x: Math.round(x), y: Math.round(y) };
}
