export class DrawPixels {

    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private height: number;
    private width: number;
    private backgroundColor = '#e7aa4e';

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    protected reconfigure() {
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    public drawBackground(background = this.backgroundColor) {
        this.reconfigure();
        this.ctx.fillStyle = background;
        this.ctx.fillRect(0, 0, this.height, this.width);
    }

    protected drawPixels(x: number, y: number, multiplyX: number, multiplyY: number, color: string) {
        let pixSizeY = this.height / 15;
        let pixSizeX = this.width / 15;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(pixSizeY * y, pixSizeY * x, pixSizeY * multiplyY, pixSizeX * multiplyX);
    }



}