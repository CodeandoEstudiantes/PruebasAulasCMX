function wallpaper(l, w, h) {
    if (l > 0 && w > 0 && h > 0) {
        let area = 2 * ((l * h) + (w * h));
        let roll = area / (0.52 * 10);
        var order = Math.ceil(roll + (roll * 0.15));
    }
    else {
        order = 0;
    }

    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    var final = numbers[order];
    return final;
};