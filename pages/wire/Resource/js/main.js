const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 10 * 64;
canvas.height = 10 * 64;

var il = new ImageLoader([{
    'url': 'http://www.google.com/intl/en_ALL/images/srpr/logo1w.png',
    'key': 'main_logo',
    'size': 7
}, {
    'url': 'http://www.google.com/logos/winter2010_1-hp.jpg',
    'key': 'winter2010',
    'size': 32
}, {
    'url': 'http://www.google.com/logos/komensky10_hp.gif',
    'key': 'komensky',
    'size': 26
},
{
    'url': 'Resource/img/Base.png',
    'key': 'base_png',
    'size': 26
},
{
    'url': 'Resource/img/Button.png',
    'key': 'button_png',
    'size': 26
}, {
    'url': 'Resource/img/Wire.png',
    'key': 'wire_png',
    'size': 16
}]
);
il.addEventListener("start", function () {
    // console.log("start");
});
il.addEventListener("update", function (event) {
    let prog = document.getElementById("progress");
    prog.value = event.target.progress;
    // console.log("update", event.target.progress);
});
il.addEventListener("complete", function () {
    // console.log("complete");
    //ctx.drawImage(il.getImage('wire_png'), 0, 0);
    // tileMap.newMap(10, 10);
    // tileMap.drawAll();
    // tm.setTile(1, 0, 0);
    // tm.draw();
});
//Запускаем загрузку
il.start();

let tm = new TileMap(10, 10);
// tm.setTile(1, 0, 0);
tm.draw();

let type = 1;
let mouse = false;
let button = 0;

canvas.onmousedown = function (event) {
    // console.log("+");
    button = event.button;
    mouse = true;
}
canvas.onmouseup = function (event) {
    mouse = false;
    // console.log("-");
    // console.log(event.button);
    // console.log("=");
    let x = Math.floor((event.clientX - event.target.offsetLeft) / Tile.tile_size);
    let y = Math.floor((event.clientY - event.target.offsetTop) / Tile.tile_size);
    let tile = tm.getTile(x, y);
    if (tile != null) {
        if (button == 0)
            tm.setTile(type, x, y);
        if (button == 2)
            tm.setTile(0, x, y);
    }
}
canvas.onmousemove = function (event) {
    if (mouse) {
        let x = Math.floor((event.clientX - event.target.offsetLeft) / Tile.tile_size);
        let y = Math.floor((event.clientY - event.target.offsetTop) / Tile.tile_size);
        let tile = tm.getTile(x, y);
        if (tile != null) {
            if (button == 0)
                tm.setTile(type, x, y);
            if (button == 2)
                tm.setTile(0, x, y);
        }
    }
}
canvas.oncontextmenu = function (event) {
    return false;
};
function settype(e) {
    type = parseInt(e.target.value);
}


// function drawTilesheat(id, x, y, posX, posY) {
//     let textureS = this.texture_size;
//     let tileS = this.tile_size;
//     // ctx.drawImage(img, x * textureS, y * textureS, textureS, textureS, posX * tileS, posY * tileS, tileS, tileS);
//     // ctx.drawImage(document.getElementById(id), x * textureS, y * textureS, textureS, textureS, posX * tileS, posY * tileS, tileS, tileS);
//     ctx.drawImage(il.getImage(id), x * textureS, y * textureS, textureS, textureS, posX * tileS, posY * tileS, tileS, tileS);
// }