
const IsPair = (a) => a !== 0 ? a % 2 === 0 ? 'Si' : 'No' : 'Si'

const IsArrayPair = (array) => array.some(item => item % 2 !== 0) ? 'No' : 'Si'

module.exports = {
  IsPair,
  IsArrayPair
}