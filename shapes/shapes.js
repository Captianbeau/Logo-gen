//circle rectangle triangle
const fs = require(fs)
class Shape  {
    constructor (width, height, version, fill,tFill, text){
    this.width = width;
    this.height = height;
    this.version = version;
    this.fill = fill;
    
    this.tFill = tFill;
    this.text =text;
}
}
class Circle extends Shape{
constructor (cx, cy, r){
    //cx x position of center, cy y position of center, r radius
    this.cx = cx;
    this.cy = cy;
    this.r = r;
}
 makeCircle (){
    fs.writeFile(`<svg width="${shape.width}" height="${shape.height}" version="${shape.version}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${shape.fill}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.tFill}">${shape.text}</text> 
    </svg>`)
    }

}
class Square extends Shape{
    constructor(x, y, sWidth, sHeight){
        this.x = x;
        this.y = y;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
    }
    makeSquare(){
        fs.writeFile(`<svg width="${shape.width}" height="${shape.height}" version="${shape.version}" xmlns="http://www.w3.org/2000/svg">
        <rect x= "${square.x}" y= "${square.y}" width= "${square.sWidth}" height="${square.sHeight}" fill="${shape.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.tFill}">${shape.text}</text> 
        </svg>`)
    }
}
//points="220,10 325,210 120,210 "
class Triangle extends Shape{
    constructor (points){
        this.points = points
    }
    makeTriangle(){
        fs.writeFile(`<svg width="${shape.width}" height="${shape.height}" version="${shape.version}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${triangle.points} " fill="${shape.fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.tFill}">${shape.text}</text> 
        </svg>`)
    }
}
module.exports= {
    Shape, 
    Square,
    Circle,
    Triangle,
}