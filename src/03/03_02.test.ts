import React from "react";
// import {CityType, demolishHousesOnTheStreet} from "../02/02_02";
// import {createMessage, repairHouse} from "./03";
//
// let city: CityType;
//
// beforeEach(() => {
//     city = {
//         title: 'New York',
//         houses: [{
//             buildedAt: 2012, repaired: false, address: {
//                 number: 100, street: {
//                     title: 'White Street'
//                 }
//             }
//         }, {
//             buildedAt: 2008, repaired: false, address: {
//                 number: 100, street: {
//                     title: 'Happy Street'
//                 }
//             }
//         }, {
//             buildedAt: 2020, repaired: false, address: {
//                 number: 101, street: {
//                     title: 'Happy Street'
//                 }
//             }
//         },],
//         governmentBuilding: [],
//         citizenNumber: 1000000
//     }
// })
//
// test.skip('Houses should be destroyed', () => {
//     demolishHousesOnTheStreet(city, 'Happy Street')
//
//     expect(city.houses.length).toBe(1)
//     expect(city.houses[0].id).toBe(1)
// })
//
// test('Houses should be repaired', () => {
//     repairHouse(city.houses[1])
//
//     expect(city.houses[1].repaired).toBeTruthy()
// })
//
// test('Greetings should be correct', () => {
//     const message = createMessage(city)
//
//     expect(message).toBe('Hello Everynyan')
// })