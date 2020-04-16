// let math = require('./math');

// console.log(math.sum([1, 2, 3, 4]));
// console.log(math.multi(100, 2));
var fs = require('fs');
let readlineSync = require('readline-sync');
let choseQuestion;

let students = [];

let isStudent = {};
let fileStudent = fs.readFileSync('./Student.json', { encoding: "utf8" }); //thiếu { encoding: "utf8" }
do {
    console.log("1.Print list students");
    console.log("2.Add student");
    console.log("3.Save and exit");
    choseQuestion = parseInt(readlineSync.question("Which option do you choose?: ")); //Diss mẹ question nhập vào là kiểu string, nên phải parse thành int
    switch (choseQuestion) {
        case 1:
            //Print lish Students
            console.log(students);
            break;
        case 2:
            //Create and addition a new Students
            console.log("Create and addition a new Students");
            let name = readlineSync.question("What student's name?: ");
            let age = readlineSync.question("Age?: ");
            let weith = readlineSync.question("Weith?: ");
            isStudent.name = name;
            isStudent.age = parseInt(age);
            isStudent.weith = parseInt(weith);
            console.log(isStudent);
            students.push(isStudent); //Sài push thay cho join
            break;
        case 3:
            //Save and Exit
            break;
        default:
            choseQuestion = 4;
            break;
            //Mới thêm code ở đây nè

    }
} while (choseQuestion < 4)
