const calculateStylePoints = styleNotes => {
    const max = Math.max(...styleNotes);
    const min = Math.min(...styleNotes);
    const sum = sn => sn.reduce((accum, current) => accum + current);
    return sum(styleNotes) - min - max;
  };
  
  module.exports = calculateStylePoints;