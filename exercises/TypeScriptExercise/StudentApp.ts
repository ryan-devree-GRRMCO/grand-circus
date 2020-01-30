import { IStudent } from "./Student";

class StudentApp {
//     - students -- array of IStudent
// - getStudentByName -- take in a string firstName and string lastName, and returns an IStudent that matches both firstName and lastName.
// - sortStudents -- take in boolean sortByLastName that determines whether the function will sort the array by first name or last name. This will then return an array of IStudent that is sorted.
    students : IStudent[] = [
        {firstName: 'BJ', lastName: 'Clark', isFrontEnd: true},
        {firstName: 'Tommy', lastName: 'Waalkes', isFrontEnd: false},
        {firstName: 'Chris', lastName: 'Watts', isFrontEnd: true},
        {firstName: 'Roger', lastName: 'Winright', isFrontEnd: true},

    ];
    
    getStudentByName(firstName: string, lastName: string) : IStudent|undefined {
        return this.students.find( ( s : IStudent) =>{
            return (s.firstName === firstName) && (s.lastName === lastName);
        });
    }

    sortStudents(sortByLastName: boolean = true) : IStudent[] {
        return this.students.sort( (s1 : IStudent, s2 : IStudent) => {
            if ( sortByLastName) {
                return s1.lastName < s2.lastName ? -1 : 0;
            } else {
                return s1.firstName < s2.firstName ? -1 : 0;
            }
        })
    }
}

const studentApp = new StudentApp();
console.log(studentApp.getStudentByName('BJ', 'Clark'));
console.log(studentApp.sortStudents(true));
console.log(studentApp.sortStudents(false));