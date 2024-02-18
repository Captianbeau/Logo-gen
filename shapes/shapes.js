//circle rectangle triangle
const fs = require('fs');


class Shape {
    constructor(width, height, fill, tFill, text) {
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.tFill = tFill;
        this.text = text;
    }
}
//Shape end

class Circle extends Shape {
    constructor(width, height, fill, tFill, text, cx, cy, r) {
        super(width, height, fill, tFill, text);

        //cx x position of center, cy y position of center, r radius
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    makeLogo() {
        fs.writeFileSync('logo.svg',`<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tFill}">${this.text}</text> 
    </svg>`)
    }
}
//Circle end

class Square extends Shape {
    constructor(width, height, fill, tFill, text, x, y, sWidth, sHeight) {
        super(width, height, fill, tFill, text);

        //x and y are starting position sWidth and sHeight are square width and height
        this.x = x;
        this.y = y;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
    }
     makeLogo() {
         fs.writeFileSync('logo.svg',`<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x= "${this.x}" y= "${this.y}" width= "${this.sWidth}" height="${this.sHeight}" fill="${this.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tFill}">${this.text}</text> 
        </svg>`)
         }
}
//Square end

class Triangle extends Shape {
    constructor(width, height, fill, tFill, text, points) {
        super(width, height, fill, tFill, text);

        //triangles need three points format: '0,0 1,1 2,2'
        this.points = points
    }
    makeLogo() {
        return fs.writeFileSync('logo.svg', `<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${this.points} " fill="${this.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tFill}">${this.text}</text> 
        </svg>`)
    }
}
//Triangle end

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle,
}