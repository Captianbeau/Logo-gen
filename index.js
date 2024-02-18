// if statements to make logos from the results of the questions (errors)
// shapes:circle,square,triangle  colors, text, font

const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./shapes/shapes')

inquirer
    .prompt([
        {
            type:'input',
            message:'Type 3 letters for your logo',
            name:'text'
        },
        {
            type:'input',
            message:'Type a color for your letters',
            name:'tFill'
        },
        {
            type:'list',
            message:'Choose a shape',
            choices:['square','circle','triangle'],
            name:'shape'
        },
        {
            type:'input',
            message:'Type a color for your shape',
            name:'fill'
        },
    ])
    .then((logo) => {

        const{text, tFill, shape, fill} = logo;
        
        if(text.length == 3){
            switch (shape) {
                case 'circle':{
                    const circle = new Circle('300','200',fill,tFill,text,'150','100','50');
                    circle.makeLogo();
                }
                case 'square':{
                    const square = new Square('300','200',fill,tFill,text, '100','67','100','100');
                    square.makeLogo()
                }
                case 'triangle':{
                    const triangle = new Triangle('300','200',fill,tFill,text,'150,67 100,134 200,134');
                    triangle.makeLogo();
                }
            }
        }else{
            console.log('Logo needs 3 letters')
        }
        module.exports = logo;
    })
    //shape class -extends with the individual shapes needed shape js to test