import { Point } from '../main';

export function calculateDistanceBetweenPoints(p1: Point, p2: Point) {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  const x = Math.pow(x2 - x1, 2);
  const y = Math.pow(y2 - y1, 2);
  console.log(x, y);
  const distance = Math.round(Math.sqrt(x + y));
  return distance;
}
