export interface IMower {
  getPosition: () => string,
  rotateMower: (instruction : INSTRUCTIONS) => void,
  moveForward: () => void
  };

  export type TMower = IMower;

  export enum DIRECTIONS {
    NORTH = "N",
    EAST = "E",
    WEST = "W",
    SOUTH = "S"
}

export enum INSTRUCTIONS {
  LEFT = "L",
  RIGHT = "R",
  FORWARD = "F"
}


