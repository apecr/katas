const transpose = array => array[0].map((col, i) => array.map(row => row[i]));

const horizontalWining = (line) => {
  let repitedWord = undefined;
  let numWords = 0;
  line.forEach((element, index, array) => {
    if (element === repitedWord && element !== '-' && numWords < 4) {
      numWords++;
    } else if (element !== '-') {
      numWords = 1;
      repitedWord = element;
    }
  });
  return numWords === 4 ? repitedWord : 'in progress';
};

const connectFour = (board) => {
  let output = 'in progress';
  board.some((line) => {
    if (horizontalWining(line) !== 'in progress') {
      output = horizontalWining(line);
      return true;
    }
  });
  transpose(board).some((line) => {
    if (horizontalWining(line) !== 'in progress') {
      output = horizontalWining(line);
      return true;
    }
  });
  return output;
};


module.exports = {
  connectFour
};