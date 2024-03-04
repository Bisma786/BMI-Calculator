let WeightInKg:number=54;
let HeightInMeters:number=1.6;
let bmi:number=WeightInKg/(HeightInMeters*HeightInMeters);
console.log(`My BMI is ${bmi} `);

import inquirer from "inquirer"
let WInKg =await inquirer.prompt({
    name:"weight",
    type:"number",
    message:"Enter your weight"
})
let HInMeters= await inquirer.prompt({
    name:"height",
    type:"number",
    message:"Enter you height"
})
let total:number=WInKg.weight/(HInMeters.height*HInMeters.height)
console.log(`${total} is your BMI`)
