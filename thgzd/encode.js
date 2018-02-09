function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function encodeRailFenceCipher(string, numberRails) {
  let data = [];
  for (var i = 0; i < numberRails; i++) {
    data.push([]);
  }
  const values = string.split('');
  let current = 0;
  let previous = -1;
  values.forEach(function(element) {
    data[current].push(element);
    if ((current === 0 && previous > current) || (current < data.length - 1 && current > previous)) {
      previous = current;
      current++;
    } else if ((current === data.length - 1) || (current > 0 && current < previous)) {
      previous = current;
      current--;
    }
  });
  return flatten(data).join('');
}


function decodeRailFenceCipher(string, numberRails) {
  // code
  return string;
}

module.exports = {
  encodeRailFenceCipher,
  decodeRailFenceCipher
};