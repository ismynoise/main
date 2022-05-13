class TileMap {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.map = new Array(width);
        for (let y = 0; y < this.map.length; y++) {
            this.map[y] = new Array(height);
        }
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.map[y][x] = new Tile(0, x, y, 0, 0, 0, 0);
            }
        }
    }
    getTile(x, y) {
        if (x < 0 || y < 0 || x > this.width - 1 || y > this.height - 1)
            return null;
        return this.map[y][x];
    }
    setTile(type, x, y) {
        if (type == 0)
            remuvet.play();
        else
            sett.play();


        if (x < 0 || y < 0 || x > this.width - 1 || y > this.height - 1)
            return null;
        this.map[y][x].type = type;
        if (this.getTile(x, y - 1) != null) {
            this.map[y][x].upTile = this.getTile(x, y - 1).type;
            this.getTile(x, y - 1).downTile = this.map[y][x].type;
            this.map[y - 1][x].draw();
        }
        if (this.getTile(x, y + 1) != null) {
            this.map[y][x].downTile = this.getTile(x, y + 1).type;
            this.getTile(x, y + 1).upTile = this.map[y][x].type;
            this.map[y + 1][x].draw();
            //this.drawTile(x, y + 1);
        }
        if (this.getTile(x - 1, y) != null) {
            this.map[y][x].leftTile = this.getTile(x - 1, y).type;
            this.getTile(x - 1, y).rightTile = this.map[y][x].type;
            this.map[y][x - 1].draw();
            //this.drawTile(x - 1, y);
        }
        if (this.getTile(x + 1, y) != null) {
            this.map[y][x].rightTile = this.getTile(x + 1, y).type;
            this.getTile(x + 1, y).leftTile = this.map[y][x].type;
            this.map[y][x + 1].draw();
            //this.drawTile(x + 1, y);
        }
        this.map[y][x].draw();
        //this.drawTile(x, y);
        //this.drawGrid();
        //this.draw();
    }
    draw() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.map[y][x].draw();
            }
        }
        //this.drawGrid();
    }
    drawGrid() {
        for (let y = 0; y < this.height + 1; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * Tile.tile_size + 1);
            ctx.lineTo(this.width * Tile.tile_size, y * Tile.tile_size);
            ctx.lineWidth = 2; // ширина контура
            ctx.strokeStyle = "magenta"; // цвет контура
            ctx.stroke();  // рисовить не заполненым
            ctx.closePath();
        }
        for (let x = 0; x < this.width + 1; x++) {
            ctx.beginPath();
            ctx.moveTo(x * Tile.tile_size + 1, 0);
            ctx.lineTo(x * Tile.tile_size, this.height * Tile.tile_size);
            ctx.lineWidth = 2; // ширина контура
            ctx.strokeStyle = "magenta"; // цвет контура
            ctx.stroke();  // рисовить не заполненым
            ctx.closePath();
        }
    }
}

var remuvet = new Audio('Resource/sound/pop.ogg');
var sett = new Audio('Resource/sound/wood click.ogg');
