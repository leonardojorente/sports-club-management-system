import { faker } from '@faker-js/faker'

export const generateRandomAlphaNumericString = (length: number) =>{
    return faker.string.alphanumeric(length)
}