function bubbleSort(list) {
    if (list.length < 2) {
        return false;
    } else {
        for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < list.length - i - 1; j++) {
                if (list[j] < list[j + 1]) {
                    var temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
            }
        }
    }
    return list;
};