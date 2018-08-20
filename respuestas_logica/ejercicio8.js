function calcula(a,b )
{
var as = a.reduce((x,y) => x*y);
var bs = b.reduce((x,y) => x*y);
return as > bs ? as - bs : bs - as;
}

var a = [ 500, 15, 25 ];
var b = [ 19, 24, 14 ];

console.log(calcula(a,b))
