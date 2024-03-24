function demeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const limit = 12;
    if (speed <= speedLimit) {
        console.log("ok");
        return 0;
    } else {
        const demeritPoints = Math.floor((speed - speedLimit)/kmPerDemeritPoint);
        if (demeritPoints >= limit) {
            console.log("license suspended");
        } else {
          console.log("points:", "demeritPoints");
        }
        return demeritPoints;
    }
}
console.log(demeritPoints(80)) // returns 2