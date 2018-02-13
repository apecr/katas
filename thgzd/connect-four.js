const transpose = array => array[0].map((col, i) => array.map(row => row[i]));

const calculateLeft2RightDiagonal = (matrix, x0, y0, numberOfRows, numberOfCols) => {
  let x = x0;
  let y = y0;
  let diag = [];
  while (x <= numberOfRows - 1 && y <= numberOfCols - 1) {
    diag.push(matrix[x][y]);
    x++;
    y++;
  }
  return diag;
};

const calculateRigth2LeftDiagonal = (matrix, x0, y0, numberOfRows, numberOfCols) => {
  let diag = [];
  let x = x0;
  let y = y0;
  while (x < numberOfRows && y >= 0) {
    diag.push(matrix[x][y]);
    x++;
    y--;
  }
  return diag;
};

const left2RigthDiagonal = (array, n) => {
  let diag = [];
  let rowSize = array[0].length;
  let colSize = transpose(array)[0].length;
  const diagNumber = Math.abs(n);
  if (n < 0) {
    diag = calculateLeft2RightDiagonal(array, 0, diagNumber, colSize, rowSize);
  } else if (n <= colSize - 1) {
    diag = calculateLeft2RightDiagonal(array, diagNumber, 0, colSize, rowSize);
  }
  return diag;
};

const rigth2LeftDiagonal = (array, n) => {
  let diag = [];
  let numberOfColumns = array[0].length;
  let numberOfRows = transpose(array)[0].length;
  const diagNumber = Math.abs(n);
  if (n < 0) {
    diag = calculateRigth2LeftDiagonal(array, 0, numberOfColumns - diagNumber - 1, numberOfRows, numberOfColumns);
  } else if (n <= numberOfRows - 1) {
    diag = calculateRigth2LeftDiagonal(array, diagNumber, numberOfColumns - 1, numberOfRows, numberOfColumns);
  }
  return diag;
};

const vectorWinning = (line) => {
  let repitedWord = undefined;
  let numWords = 0;
  line.forEach((element, index, array) => {
    if (element === repitedWord && element !== '-' && numWords < 4) {
      numWords++;
    } else if (element !== '-' && numWords < 4) {
      numWords = 1;
      repitedWord = element;
    }
  });
  return numWords === 4 ? repitedWord : 'in progress';
};

const diagonalWinning = (board) => {
  let numberOfColumns = board[0].length;
  let numberOfRows = transpose(board)[0].length;
  for (var i = 1 - numberOfColumns; i < numberOfRows; i++) {
    if (vectorWinning(left2RigthDiagonal(board, i)) !== 'in progress') {
      return vectorWinning(left2RigthDiagonal(board, i));
    }
  }
  for (var j = 1 - numberOfColumns; j < numberOfRows; j++) {
    if (vectorWinning(rigth2LeftDiagonal(board, j)) !== 'in progress') {
      return vectorWinning(rigth2LeftDiagonal(board, j));
    }
  }
  return 'in progress';
};

const evaluateLine = (line, output) => {
  if (vectorWinning(line) !== 'in progress') {
    output = vectorWinning(line);
    return true;
  }
};

const isDraw = board => {
  return board.map(row => row.includes('-')).reduce((acc, element) => acc && !element, true);
};

const connectFour = (board) => {
  let output = 'in progress';
  board.some((line) => {
    if (vectorWinning(line) !== 'in progress') {
      output = vectorWinning(line);
      return true;
    }
  });
  transpose(board).some((line) => {
    if (vectorWinning(line) !== 'in progress') {
      output = vectorWinning(line);
      return true;
    }
  });
  output = diagonalWinning(board) !== 'in progress' ? diagonalWinning(board) : output;
  if (output === 'in progress') {
    return isDraw(board) ? 'draw' : output;
  }
  return output;
};


module.exports = {
  connectFour,
  transpose,
  left2RigthDiagonal,
  vectorWinning
};