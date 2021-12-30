import { IMower,DIRECTIONS, INSTRUCTIONS } from "./types";

export class Mower implements IMower{
  private _x: number;
  private _y: number;
  private _currentDirection: DIRECTIONS;
  private _hBoundary: number;
  private _vBoundary: number;

  constructor(coordinates: Array<number>, direction: DIRECTIONS, lawnSize: Array<number>) {
    this._currentDirection = direction;
    this._x = coordinates[0];
    this._y = coordinates[1];
    this._hBoundary = lawnSize[0];
    this._vBoundary = lawnSize[1];
  }

  // --------------------------------------------------------------------------------------------------

  getPosition() {
    return `${this._x} ${this._y} ${this._currentDirection}`
  }

  // --------------------------------------------------------------------------------------------------

  rotateMower(instruction : INSTRUCTIONS) {
    this._doRotate(instruction)
  }

  // --------------------------------------------------------------------------------------------------

  moveForward() {
    this._doMoveForward()
  }

  // --------------------------------------------------------------------------------------------------

  _doMoveForward() {
    switch(this._currentDirection) {
      case DIRECTIONS.NORTH:
        if (this._boundaryIsValidForMoving(this._x, this._y + 1)) { this._y += 1 }
        break;
      case DIRECTIONS.EAST:
        if (this._boundaryIsValidForMoving(this._x + 1, this._y)) { this._x += 1 }
        break;
      case DIRECTIONS.SOUTH:
        if (this._boundaryIsValidForMoving(this._x, this._y - 1)) { this._y -= 1 }
        break;
      case DIRECTIONS.WEST:
        if (this._boundaryIsValidForMoving(this._x - 1, this._y)) { this._x -= 1 }
        break;
    }
  }

  // --------------------------------------------------------------------------------------------------

  private _doRotate(direction: INSTRUCTIONS) {
    if(direction == INSTRUCTIONS.LEFT){
      this._doOnRoateLeft();
    }
    if (direction == INSTRUCTIONS.RIGHT){
      this._doOnRoateRight();
    }
  }

  // --------------------------------------------------------------------------------------------------

  private _doOnRoateRight() {
    switch (this._currentDirection) {
      case DIRECTIONS.NORTH:
        this._currentDirection = DIRECTIONS.EAST;
        break;
      case DIRECTIONS.WEST:
        this._currentDirection = DIRECTIONS.NORTH;
        break;
      case DIRECTIONS.SOUTH:
        this._currentDirection = DIRECTIONS.WEST;
        break;
      case DIRECTIONS.EAST:
        this._currentDirection = DIRECTIONS.SOUTH;
        break;
    }
  }

  // --------------------------------------------------------------------------------------------------

  private _doOnRoateLeft() {
    switch (this._currentDirection) {
      case DIRECTIONS.NORTH:
        this._currentDirection = DIRECTIONS.WEST;
        break;
      case DIRECTIONS.WEST:
        this._currentDirection = DIRECTIONS.SOUTH;
        break;
      case DIRECTIONS.SOUTH:
        this._currentDirection = DIRECTIONS.EAST;
        break;
      case DIRECTIONS.EAST:
        this._currentDirection = DIRECTIONS.NORTH;
        break;
    }
  }

  // --------------------------------------------------------------------------------------------------

  private _boundaryIsValidForMoving(x : number, y: number) {
    return x >= 0 && x <= this._hBoundary && y >= 0 && y <= this._vBoundary
  }

  // --------------------------------------------------------------------------------------------------
};