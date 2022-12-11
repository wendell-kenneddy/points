import { calculateDistanceBetweenPoints } from './math/calculateDistanceBetweenPoints';
import { calculateMiddlePoint } from './math/calculateMiddlePoint';
import { calculateRealMousePosition } from './utils/calculateRealMousePosition';
import { drawCartesianPlane } from './utils/drawCartesianPlane';
import { drawText } from './utils/drawText';
import './styles/style.css';

export interface Point {
  x: number;
  y: number;
}

const points: Point[] = [];
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const calculateBtn = document.getElementById(
  'calculate-btn'
) as HTMLButtonElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
let hasCalculated = false;
let pointsLengthWhenLastCalculated = 0;

const initializeCanvas = () => {
  ctx.font = '9px sans-serif';
  ctx.translate(Math.round(canvas.width) / 2, Math.round(canvas.height) / 2);
  drawCartesianPlane(canvas.width, canvas.height, ctx);
};

const handleClick = (e: MouseEvent) => {
  const { x, y } = calculateRealMousePosition(canvas, ctx, e, true);
  const xOffset = x > 0 ? -40 : 10;
  const yOffset = y > 0 ? 0 : 10;

  points.push({ x, y });
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fill();
  drawText(`(${x};${-y})`, { x: x + xOffset, y: y + yOffset }, ctx);

  hasCalculated = false;
};

const handleCalculate = () => {
  if (!points.length || points.length % 2 !== 0) {
    return alert('An even number of points is needed.');
  }
  if (hasCalculated) return;

  const pointsDiff = points.slice(pointsLengthWhenLastCalculated);

  for (let i = 0; i < pointsDiff.length; i++) {
    if (i > 0 && i % 2 !== 0) continue;

    const { x: x1, y: y1 } = pointsDiff[i];
    const { x: x2, y: y2 } = pointsDiff[i + 1];
    const middlePoint = calculateMiddlePoint(pointsDiff[i], pointsDiff[i + 1]);
    const distance = calculateDistanceBetweenPoints(
      { x: x1, y: -y1 },
      { x: x2, y: -y2 }
    );

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    drawText(`D: ${distance}`, { ...middlePoint, x: middlePoint.x + 10 }, ctx);
  }

  hasCalculated = true;
  pointsLengthWhenLastCalculated = points.length;
};

const restoreInitialCanvasState = () => {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  drawCartesianPlane(canvas.width, canvas.height, ctx);
  points.length = 0;
  pointsLengthWhenLastCalculated = 0;
  hasCalculated = false;
};

initializeCanvas();

canvas.onclick = handleClick;
calculateBtn.onclick = handleCalculate;
clearBtn.onclick = restoreInitialCanvasState;
