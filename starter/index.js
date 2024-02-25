const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const Manager = require("./lib/Manager.js"); // Import Manager class
const Engineer = require("./lib/Engineer.js"); // Import Engineer class
const Intern = require("./lib/Intern.js"); // Import Intern class

function generateHTML() {
    const render = require("./src/page-template.js");
    const OUTPUT_DIR = path.resolve(__dirname, "output");
    const outputPath = path.join(OUTPUT_DIR, "team.html");
    const html = render(teamMembers);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, html);
    console.log("HTML file generated successfully at", outputPath);
}

const teamMembers = [];

// Function to prompt for manager information
function promptManager() {
    console.log("Please enter the team manager's information:");
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Manager's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email address:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number:"
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    });
}

// Start by prompting for the manager's information
promptManager(); // Call the function after its definition

// Function to prompt the user for the next action
function promptMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }
    ]).then(answer => {
        switch (answer.choice) {
            case "Add an engineer":
                promptEngineer();
                break;
            case "Add an intern":
                promptIntern();
                break;
            case "Finish building the team":
                generateHTML();
                break;
        }
    });
}