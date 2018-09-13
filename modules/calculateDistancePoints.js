class lengthPointsParams {
    constructor(points, multiplier) {
        this.points = points,
        this.multiplier = multiplier
    }
};

const hillType = {
    normal: new lengthPointsParams(60, 2),
    large: new lengthPointsParams(60, 1.8),
    xLarge: new lengthPointsParams(120, 1.2)
};

const calculateDistancePoints = (hillSize, distance, kPoint) => {
    if (hillType[hillSize]) {
        const entireDistance = Math.round(distance * 2) / 2;
        const { points, multiplier } = hillType[hillSize];
        return points + (entireDistance - kPoint) * multiplier;
    }

    else {
        return null
    }
};

module.exports = calculateDistancePoints;