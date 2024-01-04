// if statements to make logos from the results of the questions (errors)
// shapes:circle,square,triangle  colors, text, font

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type:'input',
            message:'Type logo text.',
            name:'lText',
        },
        {
            type:'',
            message:'',
            name:'shapes',
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
    .then((logoParts) =>
    console.log(logoParts)
    );