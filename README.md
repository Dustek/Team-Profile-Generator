# Team Profile Generator

## Overview

The purpose of this project is to allow creation of team profiles by generating an HTML page based on user input. It allows users to input information about team members, including managers, engineers, and interns, and generates a visually appealing HTML page displaying the team's information.

## Background

This project utilizes Node.js and various npm packages such as inquirer to prompt users for information and fs to write the generated HTML file. It involves creating classes for different types of team members (Manager, Engineer, Intern) and using object-oriented programming concepts to organize and manage the team data. Additionally, there is an element of testting usint jest implemented to ensure the various parts of the project work properly.

## Usage

Run the application using Node.js, then follow the prompts to input information about the team members, starting with the manager.
Once all team members are added, the application will generate an HTML file (team.html) in the output directory, displaying the team's information.
you can also test the project by using the node command "npx jest"

## Creation Process

Firstly, I wrote the Prompt Functions, such as promptManager, promptEngineer, and promptIntern to get information from users about different types of team members using inquirer. Once the information is collected, instances of the respective classes (Manager, Engineer, Intern) are created and stored in an array.

Classes such as Manager, Engineer, and Intern are defined with properties and methods to represent different types of team members. Then, the generateHTML function utilizes a template engine to generate HTML content based on the information collected from the user. It creates an HTML file (team.html) in the output directory, displaying the team's information in a structured format.

Finally, I implemented unit tests for each class (Manager, Engineer, Intern) to ensure their functionality. These tests verify that instances of each class can be created successfully and that their properties and methods behave as expected.

## Acknowledgements

I would like to give credit to my instructor, Abdul, as well as all the TA's and fellow students who have helped me learn how to complete this project.

## Link to website example generated team:

https://dustek.github.io/Generated-team/