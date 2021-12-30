import { INSTRUCTIONS } from './types';
export class MowerHandler {
    constructor(mower) {
        this.mower = mower;
    }
    runMower(instructionsArray) {
        try {
            instructionsArray.forEach(function (instruction) {
                switch (instruction) {
                    case INSTRUCTIONS.LEFT:
                    case INSTRUCTIONS.RIGHT:
                        this.mower.rotateMower(instruction);
                        break;
                    case INSTRUCTIONS.FORWARD:
                        this.mower.moveForward();
                        break;
                }
            }.bind(this));
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(`runMower function failed: ${e.message}`);
            }
            throw e;
        }
    }
}
;
