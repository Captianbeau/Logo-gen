// if statements to make logos from the results of the questions (errors)
// shapes:circle,square,triangle  colors, text, font
const inquirer = require('inquirer');
const fs = require(fs);

inquirer
    .prompt([
        {
            type:'input',
            message:'Type three letters for your logo',
            name:'lText',
        },
        {
            type:'list',
            message:'Pick a shape',
            choices:['square','circle','triangle'],
            name:'shape',
        }, {
            type:'input',
            message:'Type the shape color',
            name:'sColor',
        }, {
            type:'input',
            message:'Type the font color',
            name:'fColor',
        },
    ])
    .then((Logo) => {
        const {lText,shape,sColor,fColor} = Logo
        
        if(lText.length == 3){
        fs.writeFile('logo.svg', 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${shape} cx="150" cy="100" r="80" fill="${sColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${fColor}">${lText}</text>
      
      </svg>`)            
        }else{
            console.log('Logo requires 3 letters')
        }
        return Logo
    },
    
    );
    
    console.log(Logo)
    module.exports = Logo;