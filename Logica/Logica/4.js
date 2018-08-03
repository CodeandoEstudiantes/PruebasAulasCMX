function potatoes(p0, w0, p1) {
    let dryPercent = (100 - p0) / 100;
    let dryPotatoes = w0 * dryPercent;
    let final = dryPotatoes / ((100 - p1) / 100);
    return Math.trunc(final)
};

potatoes(99, 100, 98)