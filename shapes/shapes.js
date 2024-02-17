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
class Circle extends Shape {
    constructor(width, height, fill, tFill, text, cx, cy, r) {
        super(width, height, fill, tFill, text);
        //cx x position of center, cy y position of center, r radius
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    makeLogo() {
        fs.writeFile(`<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${tFill}">${text}</text> 
    </svg>`)
    }

}
class Square extends Shape {
    constructor(width, height, fill, tFill, text, x, y, sWidth, sHeight) {
        super(width, height, fill, tFill, text);
        this.x = x;
        this.y = y;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
    }
    makeLogo() {
        fs.writeFile(`<svg width="${Shape.width}" height="${Shape.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x= "${Square.x}" y= "${Square.y}" width= "${Square.sWidth}" height="${Square.sHeight}" fill="${Shape.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${Shape.tFill}">${Shape.text}</text> 
        </svg>`)
    }
}
//points="220,10 325,210 120,210 "
class Triangle extends Shape {
    constructor(width, height, fill, tFill, text, points) {
        super(width, height, fill, tFill, text);
        this.points = points
    }
    makeLogo() {
        fs.writeFile('logo.svg', `<svg width="${Shape.width}" height="${Shape.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${Triangle.points} " fill="${Shape.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${Shape.tFill}">${Shape.text}</text> 
        </svg>`)
    }
}
module.exports = {
    Shape,
    Square,
    Circle,
    Triangle,
}