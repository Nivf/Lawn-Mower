import * as fs from 'fs';
import * as path from 'path';
import { Mower } from "./Mower";
import { MowerHandler } from "./MowerHandler";
import { INSTRUCTIONS, DIRECTIONS } from "./types";

/*Reading from file*/
  const inputData = fs.readFileSync(path.resolve(__dirname, '../input.txt'), 'utf8').split("\n");
  if(inputData.length < 3) {
    throw new Error(`Reading from input file: some of the input data is missing - ${inputData.toString()}`);
  }
  const lawnSize = inputData[0]?.split(' ').map((coordinate: string) => parseInt(coordinate));
  if(lawnSize == null || lawnSize.length != 2){
    throw new Error(`Reading from input file: coordinates are not valid - ${inputData[0]}`);
  }

/*Process mowers*/
let i = 1;
while (i < inputData.length) {
  try{
    const positionsArray = inputData[i].trim().split(' ') as Array<DIRECTIONS>; //trim for remove trailing space
    const x = parseInt(positionsArray[0]), y = parseInt(positionsArray[1]);
    const initPosition = [x,y];
    const direction = positionsArray[2] 
    const mower = new Mower(initPosition, direction, lawnSize);
    const handler = new MowerHandler(mower);
    const instructionsArray = inputData[i + 1].trim().split('') as Array<INSTRUCTIONS>;
    handler.runMower(instructionsArray);
    console.log(mower.getPosition());
    i += 2;
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(`Processing mower ${i} failed: ${e.message}`);
    }
   throw e;
  }
}

