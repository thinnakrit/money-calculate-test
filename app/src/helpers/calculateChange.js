import reduce from 'lodash/reduce' 
import map from 'lodash/map' 
import takeRight from 'lodash/takeRight' 
import take from 'lodash/take' 

export const moneyFormat = () => [
  {
    name: '100 dollar bill',
    currency: 100,
    count: 0,
  },
  {
    name: '50 dollar bill',
    currency: 50,
    count: 0,
  },
  {
    name: '20 dollar bill',
    currency: 20,
    count: 0,
  },
  {
    name: '10 dollar bill',
    currency: 10,
    count: 0,
  },
  {
    name: '1 dollar bill',
    currency: 1,
    count: 0,
  },
  {
    name: 'quarters',
    currency: 0.25,
    count: 0,
  },
  {
    name: 'dimes',
    currency: 0.10,
    count: 0,
  },
  {
    name: 'nickel',
    currency: 0.05,
    count: 0,
  },
  {
    name: 'pennies',
    currency: 0.01,
    count: 0,
  },
]
export const calculateChange = (change) => {
  const result = map(moneyFormat(), (data) => {
    data.count = parseInt(change / data.currency)
    change = (change - (data.count > 0 ? data.count * data.currency : 0)).toFixed(2)
    return data
  })
  
  return result
}

export const printCalculateChange = (data) => {
  const convertChange = reduce(data, (prev, cur) => prev = `${prev}${cur.count > 0 ? `${prev && ','} ${cur.count} ${cur.name}` : ''}`, '')
  const splitAddCondition = convertChange.split(',')
  const splitCount = splitAddCondition.length
  if(!!!convertChange) return null
  if(splitCount > 1) {
    const setAddCondition = `,and${takeRight(splitAddCondition)}`
    return `${take(splitAddCondition, (splitCount - 1))} ${setAddCondition}`
  } else {
    return convertChange
  }
}