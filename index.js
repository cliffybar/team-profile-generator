const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

function initApp() {
    addManager();
};

function addManager () {
    inquirer.prompt([
        {
            message: "Please enter your team manager's name.",
            name: "name"
        },
        {
            message: "Please enter your manager's employee ID.",
            name: "officeNumber"
        },
        {
            message: "Please enter your manager's email address.",
            name: "email"
        },
    ])

    .then(function (data) {
        const name = data.name;
        const id = 1;
        const officeNumber = data.officeNumber;
        const email = data.email;
        const teammate = new Manager(name, id, officeNumber, email);
        teamArray.push(teammate);
        addTeam();
    });
};

function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "My team is complete!"],
            name: "addMember"
        }
    ])

    .then(function (data) {
        switch(data.addMember) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "My team is complete!":
                completeTeam();
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "Please enter the engineer's name.",
            name: "name"
        },
        {
            message: "Please enter your engineer's employee ID.",
            name: "officeNumber"
        },
        {
            message: "Please enter your engineer's email address.",
            name: "email"
        },
        {
            message: "Please enter your engineer's GitHub username.",
            name: "github"
        }
    ])

    .then(function (data) {
        const name = data.name;
        const id = teamArray.length+1;
        const officeNumber = data.officeNumber;
        const email = data.email;
        const teammate = new Engineer(name, id, officeNumber, email);
        teamArray.push(teammate);
        addTeam();
    });
};

function addIntern() {
    inquirer.prompt([
        {
            message: "Please enter the intern's name.",
            name: "name"
        },
        {
            message: "Please enter your intern's employee ID.",
            name: "officeNumber"
        },
        {
            message: "Please enter your intern's email address.",
            name: "email"
        },
        {
            message: "Please enter your intern's school.",
            name: "github"
        }
    ])

    .then(function (data) {
        const name = data.name;
        const id = teamArray.length+1
        const officeNumber = data.officeNumber;
        const email = data.email;
        const teammate = new Intern(name, id, officeNumber, email);
        teamArray.push(teammate);
        addTeam();
    });
};

function completeTeam() {

}