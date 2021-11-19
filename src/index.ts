const RECT_X = 0;
const RECT_Y = 1;
const RECT_W = 2;
const RECT_H = 3;

/**
 * Fits one rectangle into another
 */
export function fitRect(
  rect: Size | Rect,
  target: Size | Rect,
  mode: FitMode = "contain"
): Rect {
  rect = sizeOrRectToRect(rect);
  target = sizeOrRectToRect(target);

  const sw = target[RECT_W] / rect[RECT_W];
  const sh = target[RECT_H] / rect[RECT_H];

  let scale = 1;
  if (mode == "contain") {
    scale = Math.min(sw, sh);
  } else if (mode == "cover") {
    scale = Math.max(sw, sh);
  }

  return [
    target[RECT_X] + (target[RECT_W] - rect[RECT_W] * scale) / 2,
    target[RECT_Y] + (target[RECT_H] - rect[RECT_H] * scale) / 2,
    rect[RECT_W] * scale,
    rect[RECT_H] * scale,
  ];
}

export type Size = [w: number, h: number];

export type Rect = [x: number, y: number, w: number, h: number];

export type FitMode = "contain" | "cover";

function sizeOrRectToRect(rect: Size | Rect): Rect {
  if (rect.length === 2) {
    rect = [0, 0, ...rect];
  }
  if (rect.length !== 4) {
    throw new Error("invalid rect or size length");
  }
  return rect;
}
