function remove(s) {
    var stringToConvert = s;
    var convertedArray = [...stringToConvert];
    function remove1(valor) {
        return valor !== "¡";
    }
    function remove2(valor2) {
        return valor2 !== "!";
    }
    var remove = convertedArray.filter(remove1);
    var removeDos = remove.filter(remove2);


    removeDos.push("!")

    var string = removeDos.join('');
    console.log(string);
}

remove("¡Hi!");