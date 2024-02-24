const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

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
