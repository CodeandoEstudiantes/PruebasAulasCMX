function tapiz(largo, ancho, alto) {
    let rollo = (10 * .52);
    let newAlto = (alto * .15) + alto; //error previsto del 15%
    let areaPorCubrir = 2 *((largo*newAlto) + (ancho*newAlto));
    let r = Math.ceil(areaPorCubrir/rollo); //resultado de la operacion de area acubrir entre el tamaño del rollo
    let numero = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "diesciseis", "diescisiete", "diesiocho", "diescinueve", "veinte"]
    if (r > 0 && r < 21) { // se asegura que no pase del 20 
    return numero[r-1];// la posicion r no coincide con el contenido de dicha posicion  en el arrglo, entonces r-1  
    } else if (r === 0) {// si r es igual a 0 no se comprara rollos 
      return "cero";
    } else { // devuelve el valor de r en numero y no en string para los casos que son mayor a 20 rollos  
      return r;
    }
  }
  console.log (tapiz(1, 2, 6))