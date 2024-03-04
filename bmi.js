let WeightInKg = 54;
let HeightInMeters = 1.6;
let bmi = WeightInKg / (HeightInMeters * HeightInMeters);
console.log(`My BMI is ${bmi} `);
import inquirer from "inquirer";
let WInKg = await inquirer.prompt({
    name: "weight",
    type: "number",
    message: "Enter your weight"
});
let HInMeters = await inquirer.prompt({
    name: "height",
    type: "number",
    message: "Enter you height"
});
let total = WInKg.weight / (HInMeters.height * HInMeters.height);
console.log(`${total} is your BMI`);
