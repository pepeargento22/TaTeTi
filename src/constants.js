export const Turns = {
    X : '✖',
    O : '○'
  }
  
export const ARRAYS_GANADORES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// TRATE DE SACAR LOS ARRAYS GANADORES CON CUENTAS PERO SIEMPRE ME QUEDABA EL ARRAY FINAL DEL FOR REPETIDO 3 VECES PARA LOS HOR Y LOS VER
/*
const crearArraysGanadores = (array) => {
  let array_base = [0,1,2];
  var arrays_hor = [0,0,0]
  var arrays_ver = [0,0,0]
  for (let i=0; i<3; i++) {
    arrays_hor.forEach((element, index, arr) => {
      element = 3*i + array_base[index]
      if (index == 2) {
        console.log(arr)
        array.push(arr)
      }
    });
    arrays_ver.forEach((element, index, arr) => {
      element = i + 3*array_base[index]
      if (index == 2) {
        console.log(arr)
        array.push(arr)
      }
    });
  }
  let arrays_diag = [[0,4,8], [2,4,6]]
  array.push(arrays_diag[0])
  array.push(arrays_diag[1])
  console.log(array)
}

crearArraysGanadores(ARRAYS_GANADORES)
*/