const chai = require('chai')
const expect = chai.expect

const Mayusculas = require('../src/Mayusculas.js')

describe('Cadena a Mayusculas', () => {
  it('Volver a mayusculas', () => {
    expect(Mayusculas.stringToUpperCase('Saludos')).to.be.equal('SALUDOS')
    expect(Mayusculas.stringToUpperCase('Test')).to.be.equal('TEST')
    expect(Mayusculas.stringToUpperCase('abcde')).to.be.equal('ABCDE')
    expect(Mayusculas.stringToUpperCase("Apex")).to.be.equal('APEX')
    expect(Mayusculas.stringToUpperCase('skyShock')).to.be.equal('SKYSHOCK')
    expect(Mayusculas.stringToUpperCase('solo')).to.be.equal('SOLO')
  })
})