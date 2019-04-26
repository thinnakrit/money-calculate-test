import {
  moneyFormat,
  calculateChange,
  printCalculateChange,
} from './calculateChange'

describe('Test calculateChange', () => {
  test(`If 1.00 was passed as an argument, the output would be “Your change is 1 1 dollar bill&quot;. The dollar
  being the largest type of currency available to make up 100 cents, which is also the smallest quantity
  of dollars and coins.`, () => {
    const change = 1.00
    const resultChange = calculateChange(change)
    let expectResult = moneyFormat()
    expectResult[5].count = 1
    expect(resultChange).toEqual(expectResult)
  })

  test(`If .99 was passed as an argument, the output would be “Your change is 3 quarters, 2 dimes, and 4
  pennies”`, () => {
    const change = 0.99
    const resultChange = calculateChange(change)
    let expectResult = moneyFormat()
    expectResult[6].count = 3
    expectResult[7].count = 2
    expectResult[9].count = 4
    expect(resultChange).toEqual(expectResult)
  })

  test(`if 124.67 was passed as an argument, the output would be “Your change is 1 100 dollar bill, 1 20 dollar
  bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies.`, () => {
    const change = 124.67
    const resultChange = calculateChange(change)
    let expectResult = moneyFormat()
    expectResult[0].count = 1
    expectResult[2].count = 1
    expectResult[5].count = 4
    expectResult[6].count = 2
    expectResult[7].count = 1
    expectResult[8].count = 1
    expectResult[9].count = 2
    expect(resultChange).toEqual(expectResult)
  })
})

describe('Test printCalculateChange', () => {
  test(`If 1.00 was passed as an argument, the output would be “Your change is 1 1 dollar bill&quot;. The dollar
  being the largest type of currency available to make up 100 cents, which is also the smallest quantity
  of dollars and coins.`, () => {
    const change = 1.00
    const resultChange = calculateChange(change)
    const resultprintCalculateChange = printCalculateChange(resultChange)
    const expectResult = `Your change is 1 1 dollar bill.`
    expect(`Your change is${resultprintCalculateChange}.`).toEqual(expectResult)
  })

  test(`If .99 was passed as an argument, the output would be “Your change is 3 quarters, 2 dimes, and 4
  pennies”`, () => {
    const change = 0.99
    const resultChange = calculateChange(change)
    const resultprintCalculateChange = printCalculateChange(resultChange)
    const expectResult = `Your change is 3 quarters, 2 dimes ,and 4 pennies.`
    expect(`Your change is${resultprintCalculateChange}.`).toEqual(expectResult)
  })

  test(`if 124.67 was passed as an argument, the output would be “Your change is 1 100 dollar bill, 1 20 dollar
  bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies.`, () => {
    const change = 124.67
    const resultChange = calculateChange(change)
    const resultprintCalculateChange = printCalculateChange(resultChange)
    const expectResult = `Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bill, 2 quarters, 1 dimes, 1 nickel ,and 2 pennies.`
    expect(`Your change is${resultprintCalculateChange}.`).toEqual(expectResult)
  })
})
