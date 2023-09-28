type CityType = {
    citiTitle: string
    country: string
}

type AddressType = {
    street: string
    city: CityType
}

type TechType = {
    id: number
    name: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: 'Andrew',
    age: 23,
    isActive: false,
    address: {
        street: 'Voronyanskogo, 3',
        city: {
            citiTitle: 'Minsk',
            country: 'Belarus'
        }

    },
    technologies: [
        {id: 1, name: 'HTML'},
        {id: 2, name: 'CSS'},
        {id: 3, name: 'JS'},
        {id: 4, name: 'React'}
    ]
}

export const studentsCity = (student: StudentType, cityName: string) => {
    return student.address.city.citiTitle === cityName
}