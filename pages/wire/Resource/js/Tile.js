class Tile {
    static tile_size = 64;
    constructor(type, x, y, upTile, downTile, leftTile, rightTile) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.upTile = upTile;
        this.downTile = downTile;
        this.leftTile = leftTile;
        this.rightTile = rightTile;
        this.enabled = false;
    }
    draw() {
        this.clear();
        switch (this.type) {
            case 0:
                ctx.beginPath();
                ctx.rect(this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                ctx.fillStyle = "rgb(30,30,30)";
                ctx.fill();
                ctx.closePath();
                break;
            case 1:
                ctx.beginPath();
                ctx.rect(this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                ctx.fillStyle = "rgb(30,30,30)";
                ctx.fill();
                ctx.closePath();


                if (this.upTile == 0 && this.downTile == 0 && this.leftTile == 0 && this.rightTile == 0) {
                    //this.drawTilesheat(il.getImage("wire_png"), enabled, 0, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 0 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }

                if (this.upTile > 0 && this.downTile == 0 && this.leftTile == 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 1, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 1 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile > 0 && this.leftTile == 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 2, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 2 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile == 0 && this.leftTile > 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 3, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 3 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile == 0 && this.leftTile == 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 4, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 4 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }

                if (this.upTile > 0 && this.downTile > 0 && this.leftTile == 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 5, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 5 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile == 0 && this.leftTile > 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 6, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 6 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }

                if (this.upTile > 0 && this.downTile == 0 && this.leftTile > 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 7, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 7 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile > 0 && this.downTile == 0 && this.leftTile == 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 8, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 8 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile > 0 && this.leftTile > 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 9, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 9 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile > 0 && this.leftTile == 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 10, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 10 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }

                if (this.upTile > 0 && this.downTile == 0 && this.leftTile > 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 11, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 11 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile == 0 && this.downTile > 0 && this.leftTile > 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 12, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 12 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile > 0 && this.downTile > 0 && this.leftTile > 0 && this.rightTile == 0) {
                    // this.drawTilesheat("wire_png", enabled, 13, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 13 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                if (this.upTile > 0 && this.downTile > 0 && this.leftTile == 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 14, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 14 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }

                if (this.upTile > 0 && this.downTile > 0 && this.leftTile > 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 15, x, y);
                    ctx.drawImage(il.getImage("wire_png"), 0 * Tile.tile_size, 15 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                break;
            case 2:
                // ctx.beginPath();
                // ctx.rect(this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                // ctx.fillStyle = "red";
                // ctx.fill();
                // ctx.closePath();

                if (this.upTile > 0 && this.downTile > 0 && this.leftTile > 0 && this.rightTile > 0) {
                    // this.drawTilesheat("wire_png", enabled, 15, x, y);
                    ctx.drawImage(il.getImage("base_png"), 0 * Tile.tile_size, 0 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                    ctx.drawImage(il.getImage("button_png"), 0 * Tile.tile_size, 0 * Tile.tile_size, Tile.tile_size, Tile.tile_size, this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
                }
                break;
        }
        this.Grid();
    }
    Grid() {
        ctx.beginPath();
        ctx.rect(this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
        ctx.lineWidth = 1; // ширина контура
        ctx.strokeStyle = "rgb(0,122,204)"; // цвет контура
        ctx.stroke();  // рисовить не заполненым
        // ctx.fillStyle = style;
        // ctx.fill();
        ctx.closePath();
    }
    clear() {
        ctx.beginPath();
        ctx.rect(this.x * Tile.tile_size, this.y * Tile.tile_size, Tile.tile_size, Tile.tile_size);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}