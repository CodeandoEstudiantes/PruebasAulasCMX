function getUrlParameter(busqueda) {
    let llave = busqueda.slice(busqueda.indexOf('?') + 1).split('&');
    let parametro = {}
    llave.map(hash => {
        let [key, val] = hash.split('=')
        parametro[key] = decodeURIComponent(val)
    })
    return parametro;
}
console.log(getUrlParams(window.location.busqueda))