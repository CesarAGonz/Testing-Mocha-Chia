const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator.js');

describe('calculator', () => {
    describe('Suma', () => {
        it('suma de dos numeros', () => {
            expect(calculator.add(2,4)).to.equal(6);
            expect(calculator.add(4,4)).to.equal(8);
            expect(calculator.add(12,102)).to.equal(114);
            expect(calculator.add(32,30))
            .to.equal((62))
            .to.be.a('number');
        });
    });

describe('Multiplicacion', () => {
    it('multiplicacion de dos numeros', () => {
        expect(calculator.multiply(2,2)).to.be.equal(4)
        expect(calculator.multiply(3,2)).to.be.equal(6)
        expect(calculator.multiply(1,2)).to.be.equal(2)
        expect(calculator.multiply(90,87)).to.be.equal(7830)
        });
    });

describe('Divide', () => {
    it('divide de dos numeros', () => {
        expect(calculator.divide(4,2)).to.be.equal(2)
        expect(calculator.divide(90,5)).to.be.equal(18)
        expect(calculator.divide(150,3)).to.be.equal(50)
        expect(calculator.divide(1000,10)).to.be.equal(100)
        });
    });
describe('Substract', () => {
    it('subtract de dos numeros', () => {
        expect(calculator.subtract(8,5)).to.be.equal(3)
        expect(calculator.subtract(-8,10)).to.be.equal(-18)
        expect(calculator.subtract(65,3)).to.be.equal(62)
        expect(calculator.subtract(3,5)).to.be.equal(-2)
    });
});
});