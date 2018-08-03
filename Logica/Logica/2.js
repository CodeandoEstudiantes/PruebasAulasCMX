function pelicula(tarjeta, boleto, descuento) {
    let n = 1;
    let precio_boleto;
    let temp = boleto;
    let total = 0;
    while (true) {
        precio_boleto = boleto * n;
        temp *= descuento;
        total += temp;
        if (precio_boleto > Math.ceil(total + tarjeta)) {
            break;
        }
        n++;
    }
    return n;

}
console.log(pelicula(12, 4, .90));