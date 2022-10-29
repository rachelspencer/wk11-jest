const { returnTwo } = require('./functions.js')
let myFunctions = require('./functions.js')

test('check that function returns two integers', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('check that function returns greeting', () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James.')
})

test('check that function returns greeting', () => {
    expect(myFunctions.greeting('Jill')).toBe('Hello, Jill.')
})

test('check that function addition works', () => {
    expect(myFunctions.add(1, 2)).toBe(3)
})

test('check that function addition works', () => {
    expect(myFunctions.add(5, 9)).toBe(14)
})

test('check that function multiplication works', () => {
    expect(myFunctions.multiply(2, 2)).toBe(4)
})

test('check that function division works', () => {
    expect(myFunctions.divide(10, 2)).toBe(5)
})

test('check that function subtraction works', () => {
    expect(myFunctions.subtract(10, 2)).toBe(8)
})