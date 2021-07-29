class Student {
    constructor(nameParam, email, community){
        this.name = nameParam,
        this.email = email,
        this.community = community
    }
}
class Bootcamp {
    constructor(name, level, students = []){
        this.name = name,
        this.level = level,
        this.students = students
    }
    // test the `registerStudent` function
    // test the parameter
    // create a true or false variable (aboolean) set to false by default
    // create a for loop, to loop through all items
    // test to make sure for loop is working
    // IF FLAG IS `TRUE` END THE LOOP THEY EXIST
    // compare the student that was passed in `.email` to the item in the array that we are looping through
    // console.log both of the emails
    // if the emails match - that means that the email already exists in the array - change the flag to true
    // end the loop and log a message
    // if not - check the next student
    // if we reach the end of the array - IF FLAG IS STILL `FALSE` - add student
    // if student doesnt exist array.push(student)
    
    registerStudent(student){
        let doesStudentExist = false;
        for(let i = 0; i < this.students.length; i++) {
            console.log('checking...')
            if (student.email === this.students[i].email) {
                doesStudentExist = true
            } 
            if (doesStudentExist === true) {
                console.log('this student already exists!')
                return 
            }
        }
        console.log('student does not exist')
        this.students.push(student)
    }
}
const studentObject = new Student('Ruben', 'r@gmail.com', 'nucamp')
const bootcampObject = new Bootcamp('Nucamp', 2, [{ email: 'b@gmail.com' }, { email: 'r@gmail.com'}, { email: 'q@gmail.com'}])
bootcampObject.registerStudent(studentObject);
console.log(bootcampObject);