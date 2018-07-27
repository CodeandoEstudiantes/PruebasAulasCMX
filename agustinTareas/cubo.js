function cubo (a,b){
    let as = a.reduce((x,y) => x*y);
    let bs = b.reduce((x,y) => x*y);
    return as > bs ? as-bs: bs-as;
}

let a = [50,15,25];
let b = [19,24,14];

console.log(cubo(a,b))