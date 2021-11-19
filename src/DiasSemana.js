const weekDayByNumber = (day) => {
    switch (day) {
      case 1:
        return 'domingo'
        break;
      case 2:
        return 'lunes'
        break;
      case 3:
        return 'martes'
        break;
      case 4:
        return 'miercoles'
        break;
      case 5:
        return 'jueves'
        break;
      case 6:
        return 'viernes'
        break;
      case 7:
        return 'sabado'
        break;
  
      default:
        return 'No es un dia valido'
        break;
    }
  }
module.exports = {
    weekDayByNumber
}