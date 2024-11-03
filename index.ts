#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

console.log("=".repeat(100))
console.log(chalk.magentaBright.bold("\n\t WELCOME-code with Tooba--simple-calculator--\n"))
console.log("=".repeat(100))

let answers=await inquirer.prompt([
    {
        name:"firstNumber",
        type:"number",
        message:("Enter your first number..")
    },
    {
        name:"secondNumber",
        type:"number",
        message:"Enter your second number"
    },
    {
        name:"operations",
        type:"list",
        message:"Select any one operation..",
        choices:["Addition","Subtraction","Multiplication","Division"]
    }
])
if(answers.operations==="Addition"){
console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operations==="Subtraction"){
console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operations==="Multiplication"){
console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operations==="Division"){
console.log(answers.firstNumber / answers.secondNumber)
}
else{
console.log("Invalid operation")
}