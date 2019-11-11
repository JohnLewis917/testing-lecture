const {sum } = require('../functions')
// most basic of tests
test('2 equals 2', () => {
    expect(2).toBe(2)
})
describe('sum function', () => {

})
test('sum of 1 and 2 should be 3', () => {
    expect(sum(1,2)).toBe(3)
})
test('works with strings', () => {
    expect(sum('1', '5')).toBe(6)
})
test('object has id', () => {
    expect({id: 4}).toEqual({id:4})
})
test('true equals true', () => {
    expect(90).toBeTruthy()
})
test('falsy values are falsy', () => {
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()

})

const wishList = ['Steinway', 'Bosendorfer', 'Yamaha']

test('wishlist contains Steinway', () => {
    expect(wishList).toContain('Steinway')
})

//grouping tests
describe('bank account methods and properties', () => {
    afterEach(() => {
        bankAccount.balance = 1000
    })
    test('initial balance is 1000', () => {

        expect(bankAccount.balance).toBe(1000)
    })
    test('deposit should correctly alter balance', () => {
        bankAccount.deposit(5000)
        expect(bankAccount.balance).toBe(6000)
    })
    test('withdraw should correctly alter balance', () => {
        bankAccount.withdraw(400)
        expect(bankAccount.balance).toBe(600)
    })
})
let bankAccount = {
    balance: 1000,
    deposit(amount) {
        this.balance += amount
    },
    withdraw(amount) {
        this.balance -= amount
    }

}