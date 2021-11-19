const chai = require('chai')
const expect = chai.expect

const OrdenarArreglo = require('../src/OrdenarArreglo.js')
describe('Ordenar array', () => {
  it('Ordenar un array', () => {
    expect(OrdenarArreglo.orderedArray([9, 2, 1, 3, 7])).to.have.all.members([ 1, 2, 3, 7, 9])
    expect(OrdenarArreglo.orderedArray([174, 25 , 15, 3])).to.have.all.members([3, 15, 25, 174])
    expect(OrdenarArreglo.orderedArray([3, 2, 12])).to.have.all.members([2, 3, 12])
    expect(OrdenarArreglo.orderedArray([11, 22, 21, 38, 32, 23])).to.have.all.members([11, 21, 22, 23, 32, 38])
    expect(OrdenarArreglo.orderedArray([11, 25, 10])).to.have.all.members([10, 11, 25])
    expect(OrdenarArreglo.orderedArray([3.1, 3.2, 3.3])).to.have.all.members([3.1, 3.2, 3.3])
  })
})