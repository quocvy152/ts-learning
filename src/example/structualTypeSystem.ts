/**
 * Structual Type System
 * + If two objects have the same shape, they are considered to be of the same type.
 */

interface Point {
    x: number;
    y: number;
}

const showPoint = (point: Point): void => {
    console.log({
        pointX: point.x,
        pointY: point.y,
    })
}

const pointExample = {
    x: 100,
    y: 109
} // TS considered be a same type with Point

showPoint(pointExample);

class VituralPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const pointExampleVituralPoint = new VituralPoint(99, 19);

showPoint(pointExampleVituralPoint);