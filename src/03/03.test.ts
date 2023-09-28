import React from "react";
// import {studentsCity, StudentType} from "../02/02";
// import {addSkill, makeActive} from "./03";
// let student: StudentType
//
// beforeEach(() => {
//     student = {
//         id: 1,
//         name: 'Andrew',
//         age: 23,
//         isActive: false,
//         address: {
//             street: 'Voronyanskogo, 3',
//             city: {
//                 citiTitle: 'Minsk',
//                 country: 'Belarus'
//             }
//
//         },
//         technologies: [
//             {id: 1, name: 'HTML'},
//             {id: 2, name: 'CSS'},
//             {id: 3, name: 'JS'},
//             {id: 4, name: 'React'}
//         ]
//     }
// })
//
// test('new tech skill should be added to student', () => {
//     expect(student.technologies.length).toBe(4)
//     addSkill(student, 'Redux')
//     expect(student.technologies.length).toBe(5)
//     expect(student.technologies[4].name).toBe('Redux')
//     expect(student.technologies[4].id).toBeDefined()
// })
//
// test('Student should be made active', () => {
//     expect(student.isActive).toBe(false)
//     makeActive(student)
//     expect(student.isActive).toBe(true)
// })
//
// test('Is student live in city?', () => {
//     expect(student.address.city.citiTitle).toBe('Minsk')
//     let result1 = studentsCity(student, 'Moscow')
//     let result2 = studentsCity(student, 'Minsk')
//
//     expect(result1).toBe(false)
//     expect(result2).toBe(true)
// })