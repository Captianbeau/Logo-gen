// if statements to make logos from the results of the questions (errors)
// shapes:circle,square,triangle  colors, text, font

const inquirer = require('inquirer')
const fs = require('fs')

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
            name:'tColor'
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
            name:'sColor'
        },
    ])
    .then((logo) => {

        const{text, tColor, shape, sColor} = logo;
        if(text.length == 3){
            console.log('quiz works')
        }else{
            console.log('Logo needs 3 letters')
        }
        module.exports = logo;
    })