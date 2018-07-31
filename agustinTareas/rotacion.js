let laPalabra = 'parangaricutirimicuaro'
let laCadena = [ 'que', 'paso', 'aqui',  'halo']



function rotaciones(palab) {

    let rot = []
    for (let i = 0; i < palab.length; i++) {


        let p1 = palab.substring(i)
        let p2 = palab.substring(0, i)




        rot.push(p1 + p2)

    }


    return rot


}

function contain_all_rots(palabra, cadena) {
    let miRot = rotaciones(palabra)
    console.log(miRot)
    for (let j = 0; j < miRot.length; j++) {
        // console.log(!cadena.includes(mirotacion[j]))
        if (!cadena.includes(miRot[j])) {
            console.log(miRot[j])
            return false
        }

    }
    return true



}

console.log(contain_all_rots(laPalabra, laCadena))