import {Address} from "node:cluster";

export type StreetType = {
    title: string
}


export type AddressType = {
    number: number
    street: StreetType
}


export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<string>
}

export const demolishHousesOnTheStreet = (city: CityType, happyStreet: string) => {

}