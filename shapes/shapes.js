//circle rectangle triangle
const fs = require(fs)
class Shape  {
    constructor (width, height, version, fill, stroke,tFill, text){
    this.width = width;
    this.height = height;
    this.version = version;
    this.fill = fill;
    this.stroke = stroke;
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
        <rect x= "${square.x}" y= "${square.y}" width= "${square.sWidth}" height="${square.sHeight}" stroke="${shape.stroke}" fill="${shape.fill}" stroke-width="5"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=>${shape.text}</text> 
        </svg>`)
    }
}
//points="220,10 325,210 120,210 "
class Triangle extends Shape{
    constructor (points){
        this.points = points
    }
    makeTriangle(){

    }
}
module.exports= {
    Shape, 
    Square,
    Circle,
    Triangle,
}