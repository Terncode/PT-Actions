import { DrawPixels } from './DrawPixels';

export class RightEye extends DrawPixels {

    private eyeOutLine = '#000000';
    private eyeColorInside = '#ffffff';
    private eyeColor = '#b17a00';

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
    }

    private eye0(l: string) {
        this.drawPixels(3, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(3, 8, 6, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(4, 12, 4, 1, this.eyeOutLine);
        this.drawPixels(4, 9, 4, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(5, 9, 3, 2, this.eyeColor);
        if (l === '1') this.drawPixels(4, 9, 3, 2, this.eyeColor);
        if (l === '2') this.drawPixels(4, 10, 3, 2, this.eyeColor);
        if (l === '3') this.drawPixels(5, 10, 3, 2, this.eyeColor);
        if (l === '4') this.drawPixels(5, 9, 2, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }

    private eye1(l: string) {
        this.drawPixels(4, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(4, 8, 5, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(4, 12, 4, 1, this.eyeOutLine);
        this.drawPixels(5, 9, 3, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(5, 9, 3, 2, this.eyeColor);
        if (l === '1') this.drawPixels(5, 9, 2, 2, this.eyeColor);
        if (l === '2') this.drawPixels(5, 10, 2, 2, this.eyeColor);
        if (l === '3') this.drawPixels(5, 10, 3, 2, this.eyeColor);
        if (l === '4') this.drawPixels(5, 9, 2, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }

    private eye2(l: string) {
        this.drawPixels(5, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 8, 4, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 12, 3, 1, this.eyeOutLine);
        this.drawPixels(6, 9, 2, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(6, 9, 2, 2, this.eyeColor);
        if (l === '1') this.drawPixels(6, 9, 1, 2, this.eyeColor);
        if (l === '2') this.drawPixels(6, 10, 1, 2, this.eyeColor);
        if (l === '3') this.drawPixels(6, 10, 2, 2, this.eyeColor);
        if (l === '4') this.drawPixels(6, 9, 1, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);

    }
    private eye3(l: string) {
        this.drawPixels(6, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 8, 3, 1, this.eyeOutLine);
        this.drawPixels(6, 12, 2, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(7, 9, 1, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(7, 9, 1, 2, this.eyeColor);
        if (l === '3') this.drawPixels(7, 10, 1, 2, this.eyeColor);
        if (l === '5') this.drawPixels(7, 9, 1, 2, this.eyeColor);
    }
    private eye4() {
        this.drawPixels(7, 8, 1, 5, this.eyeOutLine);

        //this.drawPixels(6, 12, 2, 1, this.eyeOutLine);
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);

    }
    private eye5() {
        this.drawPixels(7, 8, 1, 1, this.eyeOutLine);
        this.drawPixels(7, 12, 1, 1, this.eyeOutLine);
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);
    }
    private eye6(l: string) {
        this.drawPixels(4, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(3, 7, 2, 1, this.eyeOutLine);
        this.drawPixels(4, 8, 5, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(4, 12, 4, 1, this.eyeOutLine);
        this.drawPixels(5, 9, 3, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(5, 9, 3, 2, this.eyeColor);
        if (l === '1') this.drawPixels(5, 9, 2, 2, this.eyeColor);
        if (l === '2') this.drawPixels(5, 10, 2, 2, this.eyeColor);
        if (l === '3') this.drawPixels(5, 10, 3, 2, this.eyeColor);
        if (l === '4') this.drawPixels(5, 9, 2, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }
    private eye7(l: string) {
        this.drawPixels(5, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(4, 7, 2, 1, this.eyeOutLine);
        this.drawPixels(5, 8, 4, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 12, 3, 1, this.eyeOutLine);
        this.drawPixels(6, 9, 2, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(6, 9, 2, 2, this.eyeColor);
        if (l === '1') this.drawPixels(6, 9, 1, 2, this.eyeColor);
        if (l === '2') this.drawPixels(6, 10, 1, 2, this.eyeColor);
        if (l === '3') this.drawPixels(6, 10, 2, 2, this.eyeColor);
        if (l === '4') this.drawPixels(6, 9, 1, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }
    private eye8(l: string) {
        this.drawPixels(6, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 7, 2, 1, this.eyeOutLine);
        this.drawPixels(6, 8, 3, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 12, 2, 1, this.eyeOutLine);
        this.drawPixels(7, 9, 1, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(7, 9, 1, 2, this.eyeColor);
        if (l === '3') this.drawPixels(7, 10, 1, 2, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }

    private eye9() {
        this.drawPixels(6, 7, 2, 1, this.eyeOutLine);
        this.drawPixels(7, 8, 1, 5, this.eyeOutLine);
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);
    }

    private eye10() {
        this.drawPixels(7, 8, 1, 5, this.eyeOutLine);
    }

    private eye11() {
        this.drawPixels(7, 8, 1, 1, this.eyeOutLine);
        this.drawPixels(6, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(7, 12, 1, 1, this.eyeOutLine);
    }

    private eye12() {
        this.drawPixels(6, 8, 2, 1, this.eyeOutLine);
        this.drawPixels(5, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 12, 2, 1, this.eyeOutLine);
    }
    private eye13() {
        this.drawPixels(5, 8, 3, 1, this.eyeOutLine);
        this.drawPixels(4, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 12, 3, 1, this.eyeOutLine);
    }
    private eye14(l: string) {
        this.drawPixels(4, 8, 5, 1, this.eyeOutLine);
        this.drawPixels(3, 8, 1, 3, this.eyeOutLine);
        this.drawPixels(4, 11, 1, 1, this.eyeOutLine);
        this.drawPixels(5, 12, 3, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 9, 3, 3, this.eyeColorInside);
        this.drawPixels(4, 9, 1, 2, this.eyeColorInside);

        if (l === '0') this.drawPixels(5, 9, 3, 2, this.eyeColor);
        if (l === '1') this.drawPixels(4, 9, 3, 2, this.eyeColor);
        if (l === '2') {
            this.drawPixels(4, 10, 3, 1, this.eyeColor);
            this.drawPixels(5, 11, 2, 1, this.eyeColor);
        }
        if (l === '3') this.drawPixels(5, 10, 3, 2, this.eyeColor);
        if (l === '4') this.drawPixels(5, 9, 2, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }
    private eye15(l: string) {
        this.drawPixels(5, 8, 4, 1, this.eyeOutLine);
        this.drawPixels(4, 8, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 11, 1, 1, this.eyeOutLine);
        this.drawPixels(6, 12, 2, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 9, 2, 3, this.eyeColorInside);
        this.drawPixels(5, 9, 1, 2, this.eyeColorInside);


        if (l === '0') this.drawPixels(6, 9, 2, 2, this.eyeColor);
        if (l === '1') this.drawPixels(5, 9, 2, 2, this.eyeColor);
        if (l === '2') {
            this.drawPixels(5, 10, 2, 1, this.eyeColor);
            this.drawPixels(6, 11, 1, 1, this.eyeColor);
        }
        if (l === '3') {
            this.drawPixels(5, 10, 3, 1, this.eyeColor);
            this.drawPixels(6, 11, 2, 1, this.eyeColor);
        };
        if (l === '4') this.drawPixels(5, 9, 2, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);

    }
    private eye16(l: string) {
        this.drawPixels(5, 8, 4, 1, this.eyeOutLine);
        this.drawPixels(5, 9, 1, 2, this.eyeOutLine);
        this.drawPixels(6, 11, 1, 1, this.eyeOutLine);
        this.drawPixels(7, 12, 1, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(7, 9, 1, 3, this.eyeColorInside);
        this.drawPixels(6, 9, 1, 2, this.eyeColorInside);

        if (l === '0') this.drawPixels(6, 9, 2, 2, this.eyeColor);
        if (l === '1') this.drawPixels(6, 9, 1, 2, this.eyeColor);
        if (l === '2') this.drawPixels(6, 10, 1, 1, this.eyeColor);


        if (l === '3') {
            this.drawPixels(6, 10, 2, 1, this.eyeColor);
            this.drawPixels(7, 11, 1, 1, this.eyeColor);
        };
        if (l === '4') this.drawPixels(6, 9, 1, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }

    private eye17(l: string) {
        this.drawPixels(7, 8, 2, 1, this.eyeOutLine);
        this.drawPixels(6, 8, 1, 4, this.eyeOutLine);

        this.drawPixels(7, 12, 1, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(7, 9, 1, 3, this.eyeColorInside);

        if (l === '0') this.drawPixels(7, 9, 1, 2, this.eyeColor);
        if (l === '3') this.drawPixels(7, 10, 1, 2, this.eyeColor);
        if (l === '5') this.drawPixels(7, 9, 1, 2, this.eyeColor);
    }
    private eye18(l: string) {
        this.drawPixels(6, 8, 3, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(5, 8, 1, 2, this.eyeOutLine);
        this.drawPixels(4, 10, 1, 2, this.eyeOutLine);
        this.drawPixels(4, 12, 4, 1, this.eyeOutLine);
        this.drawPixels(5, 10, 1, 2, this.eyeColorInside);
        this.drawPixels(6, 9, 2, 3, this.eyeColorInside);

        if (l === '0') {
            this.drawPixels(6, 9, 2, 1, this.eyeColor)
            this.drawPixels(5, 10, 3, 1, this.eyeColor)
        };
        if (l === '1') {
            this.drawPixels(6, 9, 1, 1, this.eyeColor);
            this.drawPixels(5, 10, 2, 1, this.eyeColor);
        }

        if (l === '2') this.drawPixels(5, 10, 2, 2, this.eyeColor);
        if (l === '3') this.drawPixels(5, 10, 3, 2, this.eyeColor);
        if (l === '4') this.drawPixels(6, 9, 1, 1, this.eyeColor);
        if (l === '5') this.drawPixels(6, 9, 2, 2, this.eyeColor);
    }

    private eye19(l: string) {
        this.drawPixels(7, 8, 2, 1, this.eyeOutLine);
        this.drawPixels(8, 9, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 8, 1, 2, this.eyeOutLine);
        this.drawPixels(5, 10, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 12, 2, 1, this.eyeOutLine);
        this.drawPixels(6, 10, 1, 2, this.eyeColorInside);
        this.drawPixels(7, 9, 1, 3, this.eyeColorInside);

        if (l === '0') {
            this.drawPixels(7, 9, 1, 1, this.eyeColor)
            this.drawPixels(6, 10, 2, 1, this.eyeColor)
        };
        if (l === '1') {
            this.drawPixels(6, 10, 1, 1, this.eyeColor);
        }
        if (l === '2') this.drawPixels(6, 10, 1, 2, this.eyeColor);
        if (l === '3') this.drawPixels(6, 10, 2, 2, this.eyeColor);

        if (l === '5') {
            this.drawPixels(6, 10, 2, 1, this.eyeColor);
            this.drawPixels(7, 9, 1, 1, this.eyeColor);
        }
    }

    private eye20() {
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);
        this.drawPixels(7, 11, 1, 2, this.eyeOutLine);
        this.drawPixels(6, 9, 1, 2, this.eyeOutLine);
        this.drawPixels(5, 8, 1, 1, this.eyeOutLine);
    }

    private eye21() {
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);
        this.drawPixels(7, 9, 1, 4, this.eyeOutLine);
        this.drawPixels(6, 8, 1, 1, this.eyeOutLine);
    }
    private eye22() {
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);
        this.drawPixels(7, 7, 1, 2, this.eyeOutLine);
        this.drawPixels(6, 9, 1, 2, this.eyeOutLine);
        this.drawPixels(6, 7, 1, 1, this.eyeOutLine);
        this.drawPixels(5, 11, 1, 1, this.eyeOutLine);
    }
    private eye23() {
        this.drawPixels(8, 8, 1, 4, this.eyeOutLine);
        this.drawPixels(7, 7, 1, 3, this.eyeOutLine);
        this.drawPixels(6, 10, 1, 2, this.eyeOutLine)
    }




    draw(type: string | number, position: string |number) {
        this.reconfigure();
        type = type.toString();
        position = position.toString();


        switch (type.toLowerCase()) {
            case '0':
                this.eye0(position);
                break;
            case '1':
                this.eye1(position);
                break;
            case '2':
                this.eye2(position);
                break;
            case '3':
                this.eye3(position);
                break;
            case '4':
                this.eye4();
                break;
            case '5':
                this.eye5();
                break;
            case '6':
                this.eye6(position);
                break;
            case '7':
                this.eye7(position);
                break;
            case '8':
                this.eye8(position);
                break;
            case '9':
                this.eye9();
                break;
            case '10':
                this.eye10();
                break;
            case '11':
                this.eye11();
                break;
            case '12':
                this.eye12();
                break;
            case '13':
                this.eye13();
                break;
            case '14':
                this.eye14(position);
                break;
            case '15':
                this.eye15(position);
                break;
            case '16':
                this.eye16(position);
                break;
            case '17':
                this.eye17(position);
                break;
            case '18':
                this.eye18(position);
                break;
            case '19':
                this.eye19(position);
                break;
            case '20':
                this.eye20();
                break;
            case '21':
                this.eye21();
                break;
            case '22':
                this.eye22();
                break;
            case '23':
                this.eye23();
                break;
            default:
                break;
        }
    }
}