import { DrawPixels } from './DrawPixels';

export class Mouth extends DrawPixels {

    private mouthColor = '#65420d';
    private tongueColor = '#e16200';
    private mouthInsideColor = '#721946';
    private toothColor0 = '#dddddd';
    private toothColor1 = '#ffffff';

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
    }

    private drawMuzzle() {
        this.drawPixels(8, 3, 1, 4, this.mouthColor);
        this.drawPixels(8, 3, 3, 1, this.mouthColor);
    }

    private drawNeutral() {
        this.drawPixels(11, 4, 1, 3, this.mouthColor);
    }

    private drawNeutralPlus() {
        this.drawPixels(11, 4, 1, 4, this.mouthColor);
    }

    private drawT() {
        this.drawPixels(10, 7, 3, 1, this.mouthColor);
    }

    private drawHappy() {
        this.drawPixels(10, 7, 1, 1, this.mouthColor);
    }

    private drawSad() {
        this.drawPixels(12, 7, 1, 1, this.mouthColor);
    }

    private drawTongue() {
        this.drawPixels(12, 5, 1, 2, this.tongueColor);
    }

    private drawMad() {
        this.drawPixels(11, 4, 1, 2, this.mouthColor);
        this.drawPixels(10, 6, 1, 2, this.mouthColor);
    }


    private drawHappyPlus() {
        this.drawPixels(12, 5, 1, 2, this.mouthInsideColor);
        this.drawPixels(12, 7, 1, 1, this.tongueColor);
        this.drawPixels(11, 7, 1, 1, this.mouthInsideColor);
    }

    private drawMadPlus() {
        this.drawPixels(12, 5, 1, 2, this.mouthInsideColor);
        this.drawPixels(12, 7, 1, 1, this.tongueColor);
        this.drawPixels(11, 6, 1, 2, this.mouthInsideColor);
        this.drawPixels(11, 8, 1, 1, this.mouthColor);

    }

    private drawP() {
        this.drawPixels(11, 7, 1, 1, this.mouthInsideColor);
        this.drawPixels(12, 5, 1, 3, this.mouthInsideColor);
        this.drawPixels(13, 5, 1, 1, this.mouthInsideColor);
        this.drawPixels(13, 6, 1, 2, this.tongueColor);
    }

    private drawA() {
        this.drawPixels(12, 4, 1, 3, this.mouthInsideColor);
        this.drawPixels(13, 4, 1, 1, this.mouthInsideColor);
        this.drawPixels(13, 5, 1, 2, this.tongueColor);
    }

    private drawAp() {
        this.drawPixels(12, 7, 2, 1, this.mouthColor);
    }
    private drawApp() {
        this.drawPixels(11, 8, 1, 1, this.mouthColor);
        this.drawPixels(12, 9, 1, 1, this.mouthColor);
        this.drawPixels(11, 6, 1, 2, this.mouthInsideColor);
        this.drawPixels(12, 5, 1, 4, this.mouthInsideColor);
        this.drawPixels(13, 5, 1, 2, this.mouthInsideColor);
        this.drawPixels(13, 7, 1, 2, this.tongueColor);
    }

    private drawDot() {
        this.drawPixels(11, 4, 1, 1, this.mouthColor);
    }

    private smilePlus() {
        this.drawPixels(10, 7, 1, 1, this.mouthColor);
        this.drawPixels(9, 8, 1, 1, this.mouthColor);
        this.drawPixels(10, 9, 3, 1, this.mouthColor);
        this.drawPixels(10, 8, 1, 1, this.mouthInsideColor);
        this.drawPixels(11, 7, 1, 2, this.mouthInsideColor);
        this.drawPixels(12, 5, 1, 4, this.mouthInsideColor);
        this.drawPixels(13, 7, 1, 2, this.tongueColor);
        this.drawPixels(13, 5, 1, 2, this.mouthInsideColor);
    }

    private smilePlusPlus() {
        this.drawPixels(11, 4, 1, 3, this.mouthColor);
        this.drawPixels(10, 7, 1, 2, this.mouthColor);
        this.drawPixels(10, 7, 1, 1, this.mouthColor);
        this.drawPixels(11, 9, 2, 1, this.mouthColor);
        this.drawPixels(11, 7, 1, 2, this.mouthInsideColor);
        this.drawPixels(12, 6, 1, 3, this.mouthInsideColor);
        this.drawPixels(13, 7, 1, 2, this.tongueColor);
        this.drawPixels(13, 6, 1, 1, this.mouthInsideColor);
    }

    private drawAA() {
        this.drawPixels(11, 8, 1, 1, this.mouthColor);
        this.drawPixels(12, 9, 2, 1, this.mouthColor);
        this.drawPixels(12, 9, 2, 1, this.mouthColor);

        this.drawPixels(11, 6, 1, 2, this.mouthInsideColor);
        this.drawPixels(12, 5, 2, 4, this.mouthInsideColor);
        this.drawPixels(14, 5, 1, 2, this.mouthInsideColor);
        this.drawPixels(14, 7, 1, 2, this.tongueColor);
    }

    private drawNeutralMinus() {
        this.drawPixels(11, 4, 1, 2, this.mouthColor);
    }

    private drawTooth() {
        this.drawPixels(10, 8, 1, 1, this.toothColor0);
        this.drawPixels(11, 7, 1, 1, this.toothColor0);
        this.drawPixels(11, 8, 1, 1, this.toothColor1);
        this.drawPixels(12, 5, 1, 3, this.toothColor1);
    }

    private drawMadTooth() {
        this.drawPixels(10, 7, 1, 2, this.mouthColor);
        this.drawPixels(11, 9, 1, 1, this.mouthColor);
        this.drawPixels(11, 7, 1, 2, this.toothColor0);
        this.drawPixels(12, 5, 1, 4, this.toothColor1);
    }

    private drawMadToothp() {
        this.drawPixels(11, 4, 1, 4, this.mouthColor);
        this.drawPixels(10, 8, 1, 1, this.mouthColor);
        this.drawPixels(11, 9, 1, 1, this.mouthColor);

        this.drawPixels(11, 8, 1, 1, this.toothColor0);
        this.drawPixels(12, 4, 1, 5, this.toothColor1);
    }

    private drawMadToothpp() {
        this.drawPixels(11, 4, 1, 3, this.mouthColor);
        this.drawPixels(10, 7, 1, 2, this.mouthColor);
        this.drawPixels(11, 9, 1, 1, this.mouthColor);

        this.drawPixels(11, 7, 1, 2, this.toothColor0);
        this.drawPixels(12, 4, 1, 5, this.toothColor1);
    }


    private drawPP() {
        this.drawPixels(12, 5, 1, 3, this.mouthInsideColor);
        this.drawPixels(13, 5, 1, 1, this.mouthInsideColor);
        this.drawPixels(13, 6, 2, 2, this.tongueColor);
    }

    private drawPPP() {
        this.drawPixels(11, 7, 1, 1, this.mouthInsideColor);

    }

    private drawAm() {
        this.drawPixels(12, 7, 1, 1, this.mouthColor);
        this.drawPixels(12, 5, 1, 2, this.mouthInsideColor);
    }

    
    //0 - 25 Mouth Types
    public draw(type: string | number) {
        this.reconfigure();
        type = type.toString();

        switch (type.toLowerCase()) {
            case '0':
            case 'c':
            case 'happy':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawHappy();
                break;
            case '1':
            case 'sad':
            case 'm':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawSad();
                break;
            case '2':
            case 'T':
                this.drawMuzzle();
                this.drawNeutral();
                break;
            case '3':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawT();
                break;
            case '4':
            case 'tounge':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawHappy();
                this.drawTongue();
                break;
            case '5':
            case 'happyplus':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawHappy();
                this.drawHappyPlus();
                break;
            case '6':
            case 'neutralplus':
                this.drawMuzzle();
                this.drawNeutralPlus();
                break;
            case '7':
            case '/':
            case 'mad':
                this.drawMuzzle();
                this.drawMad();
                break;
            case '8':
            case '//':
            case 'madplus':
                this.drawMuzzle();
                this.drawMad();
                this.drawMadPlus();
                break;
            case '9':
            case 'P':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawHappy();
                this.drawP();
                break;
            case '10':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawA();
                this.drawAp();
                break;
            case '11':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawA();
                break;
            case '12':
                this.drawMuzzle();
                this.drawMad();
                this.drawApp();
                break;
            case '13':
                this.drawMuzzle();
                this.drawDot();
                break;
            case '14':
                this.drawMuzzle();
                this.drawNeutral();
                this.smilePlus();
                break;
            case '15':
                this.drawMuzzle();
                this.smilePlusPlus();
                break;
            case '16':
                this.drawMuzzle();
                this.drawMad();
                this.drawAA();
                break;
            case '17':
                this.drawMuzzle();
                this.drawNeutralMinus();
                break;
            case '18':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawHappy();
                this.drawTooth();
                break;
            case '19':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawMadTooth();

                break;
            case '20':
                this.drawMuzzle();
                this.drawMadToothp();
                break;
            case '21':
                this.drawMuzzle();
                this.drawMadToothpp();
                break;
            case '22':
                this.drawMuzzle();
                this.drawNeutralPlus();
                this.drawPP();
                break;
            case '23':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawHappy();
                this.drawPP();
                this.drawPPP();
                break;
            case '24':
                this.drawMuzzle();
                this.drawNeutral();
                this.drawAm();
                break;
            case '25':
                this.drawMuzzle();
                this.drawNeutralPlus();
                this.drawTongue();
                break;
            default:
                break;
        }

    }
}