// Class Exercise Solution: Student Object
const student = {
    firstName: "Alice",
    grade: "A",
    study: function() {
        console.log(this.firstName + " is studying hard!");
    }
};

student.study();
