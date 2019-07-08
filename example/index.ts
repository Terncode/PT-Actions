import { Mouth }  from "../src/Mouth";
import { LeftEye } from "../src/LeftEye";
import { RightEye } from "../src/RightEye";
import { OtherOptions } from "../src/OtherOptions";




function drawAction(){
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    const mouth = new Mouth(canvas);
    const leftEye = new LeftEye(canvas);
    const rightEye = new RightEye(canvas);
    const otherOptions = new OtherOptions(canvas);


   mouth.drawBackground(); // Draws background

   leftEye.draw(0, 3) // 0-23 eye types | 0-5 eye position 
   rightEye.draw(0, 1) // 0-23 eye types | 0-5 eye position 
    mouth.draw(0) // 0-25 | 25 faces

    //for  drawing other emotions
    otherOptions.drawBlush();
    /*
    otherOptions.drawTears();
    otherOptions.drawCrying()
    otherOptions.drawHearts();
    otherOptions.drawSleeping();
*/

    console.log('done')

    document.body.appendChild(canvas)

}

drawAction();