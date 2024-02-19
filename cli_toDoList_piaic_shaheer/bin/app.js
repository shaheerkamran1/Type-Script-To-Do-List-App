#! /usr/bin/env node

//Develop a simple command line Todo app using TypeScipt, Node.js and Inquirer.
//Create a GitHub repository for the 
//project and submit its URL in the project submission form.
import inquirer from 'inquirer';
import chalk from 'chalk';
const green = chalk.greenBright.bold;
const red = chalk.redBright.bold;
const yellow = chalk.yellowBright.bold.underline;
const blue = chalk.blueBright;
const whites = chalk.whiteBright.bold;
console.log(red("████████╗ █████╗     ██████╗  █████╗     ██╗     ██╗ ██████╗████████╗     █████╗ ██████╗ ██████╗ "));
console.log(red("╚══██╔══╝██╔══██╗    ██╔══██╗██╔══██╗    ██║     ██║██╔════╝╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗"));
console.log(red("   ██║   ██║  ██║    ██║  ██║██║  ██║    ██║     ██║╚█████╗    ██║       ███████║██████╔╝██████╔╝"));
console.log(red("   ██║   ██║  ██║    ██║  ██║██║  ██║    ██║     ██║ ╚═══██╗   ██║       ██╔══██║██╔═══╝ ██╔═══╝ "));
console.log(red("   ██║   ╚█████╔╝    ██████╔╝╚█████╔╝    ███████╗██║██████╔╝   ██║       ██║  ██║██║     ██║     "));
console.log(red("   ╚═╝    ╚════╝     ╚═════╝  ╚════╝     ╚══════╝╚═╝╚═════╝    ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝     "));
console.log("\n\n");
console.log(blue(`Ｄｅｖｅｌｏｐｅｄ  ｗｉｔｈ ${whites('❤')}  ｂｙ  Ｓｈａｈｅｅｒ`));
console.log("\n\n");
let myTask = [];
let userInput = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: blue("Enter your name: ")
    }]);
console.log(green(`\nWelcome ${userInput.name} to To-Do List App\n`));
async function promptUser() {
    let prompting = await inquirer.prompt([{
            name: "command",
            type: "list",
            choices: ["1. Enter Task", "2. View Tasks", "3. Delete Task", "4. Exit"],
            message: blue("Select your command: :")
        }]);
    switch (prompting.command) {
        case "1. Enter Task": {
            let userTask = await inquirer.prompt([
                {
                    name: "task",
                    type: "string",
                    message: blue("Enter your task: "),
                }
            ]);
            myTask.push(userTask.task);
            console.log(green("\nTask Added successfully!\n"));
            promptUser();
            break;
        }
        case "2. View Tasks": {
            if (myTask.length != 0) {
                for (let i = 0; i < myTask.length; i++) {
                    console.log(yellow(`Task ${i}: ${myTask[i]}\n`));
                }
            }
            else if (myTask.length == 0) {
                console.log(red("\nYour Task list is empty\n"));
            }
            promptUser();
            break;
        }
        case "3. Delete Task": {
            let del = await inquirer.prompt([{
                    name: "task",
                    type: "list",
                    choices: ["1. Delete latest task", "2. Delete all tasks"]
                }]);
            if (del.task == "1. Delete latest task") {
                if (myTask.length >= 1) {
                    myTask.pop();
                    console.log(green("\nLatest Task deleted successfully\n"));
                }
                else if (myTask.length == 0) {
                    console.log(red("\nYour list is empty already\n"));
                }
            }
            else if (del.task == "2. Delete all tasks") {
                let taskNo = await inquirer.prompt([{
                        name: "index",
                        type: "confirm",
                        message: yellow("Confirm to delete all tasks?: "),
                    }]);
                if (taskNo.index == true) {
                    if (myTask.length != 0) {
                        while (myTask.length != 0) {
                            myTask.pop();
                        }
                        console.log(green("\nYour Task list has been formatted successfully.\n"));
                    }
                    else if (myTask.length == 0) {
                        console.log(red("\nYour List is empty already.\n"));
                    }
                }
            }
            promptUser();
            break;
        }
        case "4. Exit": {
            console.log(green("\nThank you for using To-Do-List\n"));
            break;
        }
        default: {
            console.log(red("\nNothing\n"));
            break;
        }
    }
}
promptUser();
