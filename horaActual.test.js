const chai = require('chai')
const expect = chai.expect

const HoraActual = require('../src/HoraActual.js')
const date = new Date()
const hour = `${date.getHours()}:${date.getMinutes()}`
describe('Hora actual', () => {
  it('Obtener la hora actual', () => {
    expect(HoraActual.currentHour()).to.be.equal(hour)
  })
})