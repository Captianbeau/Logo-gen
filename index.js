// if statements to make logos from the results of the questions (errors)
// shapes:circle,square,triangle  colors, text, font

const inquirer = require('inquirer');

class Logo {};

Logo.inquirer
    .prompt([
        {
            type:'input',
            message:'Type logo text.',
            name:'lText',
        },
        {
            type:'',
            message:'',
            name:'shape',
        }, {
            type:'',
            message:'',
            name:'color',
        }, {
            type:'',
            message:'',
            name:'font',
        },

        
    ])
    .then((logoParts) => {
        const {lText,shape,color,font} = logoParts
        if(shape == 'square'){

        }else if(shape == 'circle'){

        }else if(shape == 'triangle'){
            
        }
    },
    console.log(logoParts)
    );
    module.exports = Logo;