
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes/shapes');
const fs = require('fs');

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

//checks if text is correct length
        if(text.length == 3){
            switch (shape) {
                case 'circle':
                    const circle = new Circle('300','200',fill,tFill,text,'150','100','50');
                    circle.makeLogo();
                break;

                case 'square':
                    const square = new Square('300','200',fill,tFill,text, '100','67','100','100');
                    square.makeLogo()
                break;

                case 'triangle':
                    const triangle = new Triangle('300','200',fill,tFill,text,'150,67 100,134 200,134');
                    triangle.makeLogo();
                
            }
        }else{
            console.log('Logo needs 3 letters')
        }
    })
