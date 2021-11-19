const chai = require('chai')
const expect = chai.expect

const Longitud = require('../src/Longitud.js')

describe('Longitud string', () => {
  it('Longitud de un string', () => {
    expect(Longitud.stringLength('Test')).to.be.equal(4)
    expect(Longitud.stringLength('Coder')).to.be.equal(5)
    expect(Longitud.stringLength('Codigo de prueba')).to.be.equal(16)
    expect(Longitud.stringLength('Nadaremos nadaremos')).to.be.equal(19)
    expect(Longitud.stringLength('Saludos')).to.be.equal(7)
    expect(Longitud.stringLength(' Como le hace ')).to.be.equal(12)
  })
})