import { INSTRUCTIONS, TMower } from './types';

export class MowerHandler {
  mower : TMower;
  constructor(mower : TMower) {
    this.mower = mower
  }

  runMower(instructionsArray : Array<INSTRUCTIONS>) {
    try{
      instructionsArray.forEach(function(this: MowerHandler, instruction: INSTRUCTIONS) {
        switch(instruction) {
          case INSTRUCTIONS.LEFT:
          case INSTRUCTIONS.RIGHT:
            this.mower.rotateMower(instruction);
            break;
          case INSTRUCTIONS.FORWARD:
            this.mower.moveForward();
            break;
        }
      }.bind(this))
    }
    catch(e){
      if (e instanceof Error) {
        throw new Error(`runMower function failed: ${e.message}`);
      }
     throw e;
    }
  }
};