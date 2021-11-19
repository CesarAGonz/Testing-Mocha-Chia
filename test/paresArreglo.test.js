const chai = require('chai')
const expect = chai.expect

const Pares = require('../src/Pares.js')

describe('Pares en arreglo', () => {
  it('Verificar si todos los numeros de un array son  par', () => {
    expect(Pares.IsArrayPair([5, 15, 20])).to.be.equal('No')
    expect(Pares.IsArrayPair([20, 40, 60, 80])).to.be.equal('Si')
    expect(Pares.IsArrayPair([342, 62, 50])).to.be.equal('Si')
    expect(Pares.IsArrayPair([35, 2, 1, 2, 28])).to.be.equal('No')
    expect(Pares.IsArrayPair([1.2, 1.8, 1.5])).to.be.equal('No')
    expect(Pares.IsArrayPair([2134, 862, 256])).to.be.equal('Si')
  })
})