# TypeScript Exercise

## Goal
You are going to build an app that contains and list of students, and allows you to sort by first name and last name, as well as getting a specific student by name.

You will use TypeScript interfaces to maintain the structure of the data.

## Specifications
### student.ts
Define an interface called IStudent that has the following properties:
- firstName -- string
- lastName -- string
- isFrontEnd -- boolean

### StudentApp.ts
Write a class that has the following properties and methods:
- students -- array of IStudent
- getStudentByName -- take in a string firstName and string lastName, and returns an IStudent that matches both firstName and lastName.
- sortStudents -- take in boolean sortByLastName that determines whether the function will sort the array by first name or last name. This will then return an array of IStudent that is sorted.
