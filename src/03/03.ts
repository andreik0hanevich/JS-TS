import {StudentType} from "../02/02";
import {CityType, HouseType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), name: skill})
}

export const makeActive  = (student: StudentType) => {
    student.isActive = true
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const createMessage = (city: CityType) => {
    return 'Hello Everynyan'
}