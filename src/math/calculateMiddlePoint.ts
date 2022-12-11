import { Point } from '../main';

export function calculateMiddlePoint(p1: Point, p2: Point) {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  const x = Math.floor((x1 + x2) / 2);
  const y = Math.floor((y1 + y2) / 2);
  return { x, y };
}
