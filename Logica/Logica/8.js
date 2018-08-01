function volDiff([a, b, c], [d, e, f]) {
    let volCub1 = a * b * c;
    let volCub2 = d * e * f;
    let diff = 0
    if (volCub1 > volCub2) {
        diff = volCub1 - volCub2;
    } else {
        diff = volCub2 - volCub1;
    }
    return diff
};

volDiff([2, 2, 3], [5, 4, 1]); 