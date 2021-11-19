const chai = require('chai')
const expect = chai.expect

const Pares = require('../src/Pares.js')

describe('Par', () => {
  it('Comprobar numero par', () => {
    expect(Pares.IsPair(9)).to.be.equal('No')
    expect(Pares.IsPair(8)).to.be.equal('Si')
    expect(Pares.IsPair(1)).to.be.equal('No')
    expect(Pares.IsPair(3)).to.be.equal('No')
    expect(Pares.IsPair(52.4)).to.be.equal('Si')
    expect(Pares.IsPair(4215.5)).to.be.equal('No')
  })
})