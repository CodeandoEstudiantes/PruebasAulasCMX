/*name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0*/

function hero (nombre){
    this.nombre = nombre || 'hero';
    this,posicion = '00';
    this.vida = 100;
    this.daño = 5;
    this.exp = 0;
}
console.log(hero);




