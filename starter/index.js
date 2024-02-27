const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
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

// get manager info
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

// this is where code starts
promptManager();

// After manager, brings to menu
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
                finishBuildingTeam();
                break;
        }
    });
}
// get info for engineer
function promptEngineer() {
    console.log("Please enter the engineer's information:");
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Engineer's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Engineer's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Engineer's email address:"
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer's GitHub username:"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    });
}
// get info for intern
function promptIntern() {
    console.log("Please enter the intern's information:");
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Intern's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Intern's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Intern's email address:"
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school:"
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    });
}


// finish team
function finishBuildingTeam() {
    if (teamMembers.length === 0) {
        console.log("Cannot generate HTML. Team is empty.");
        return;
    }
    
    generateHTML();
}


