import React from "react";
import {CourseType} from "./04";

test('older then 90s only', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges[0]).toBe(100)

})

test('cheap courses only', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]


    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('REACT')

})

test('get only comleted tasks', () => {
    const tasks = [
        {id: 1, name: 'Bread', isDone: false},
        {id: 2, name: 'Milk', isDone: true},
        {id: 3, name: 'Salt', isDone: false},
        {id: 4, name: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})

test('get only uncomleted tasks', () => {
    const tasks = [
        {id: 1, name: 'Bread', isDone: false},
        {id: 2, name: 'Milk', isDone: true},
        {id: 3, name: 'Salt', isDone: false},
        {id: 4, name: 'Sugar', isDone: true}
    ]

    const uncompletedTasks = tasks.filter(t => !t.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)

})