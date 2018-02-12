const expect = require('chai').expect;
const connectFour = require('../connect-four').connectFour;
const _ = require('lodash');

/* global define, it, describe, before, beforeEach, afterEach, after */
describe.only('Connect Four game determine winner function', () => {
  const emptyBoard = [
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-']
  ];
  it('Should say in progress because of the empty board', () => {
    console.log(emptyBoard);
    expect(connectFour(emptyBoard)).to.be.equal('in progress');
  });
  it('Should say R because red player has four horizontal pieces', () => {
    const _4hRBoard = _.map(emptyBoard, _.clone);
    _4hRBoard[5][0] = 'R';
    _4hRBoard[5][1] = 'R';
    _4hRBoard[5][2] = 'R';
    _4hRBoard[5][3] = 'R';
    _4hRBoard[4][0] = 'Y';
    _4hRBoard[4][1] = 'Y';
    _4hRBoard[4][2] = 'Y';
    console.log(_4hRBoard);
    expect(connectFour(_4hRBoard)).to.be.equal('R');
  });
  it('Should say R because red player has four horizontal pieces in the second row', () => {
    const _4hRBoard = _.map(emptyBoard, _.clone);
    _4hRBoard[5][0] = 'R';
    _4hRBoard[5][1] = 'Y';
    _4hRBoard[5][2] = 'R';
    _4hRBoard[5][3] = 'Y';
    _4hRBoard[4][0] = 'R';
    _4hRBoard[4][1] = 'R';
    _4hRBoard[4][2] = 'R';
    _4hRBoard[4][3] = 'R';
    _4hRBoard[3][0] = 'Y';
    _4hRBoard[3][1] = 'Y';
    _4hRBoard[3][2] = 'Y';
    console.log(_4hRBoard);
    expect(connectFour(_4hRBoard)).to.be.equal('R');
  });
  it('Should say R because red player has four vertical pieces in the first column', () => {
    const _4hRBoard = _.map(emptyBoard, _.clone);
    _4hRBoard[5][0] = 'R';
    _4hRBoard[4][0] = 'R';
    _4hRBoard[3][0] = 'R';
    _4hRBoard[2][0] = 'R';
    _4hRBoard[5][1] = 'Y';
    _4hRBoard[4][1] = 'Y';
    _4hRBoard[3][1] = 'Y';
    console.log(_4hRBoard);
    expect(connectFour(_4hRBoard)).to.be.equal('R');
  });
  it('Should say Y because yellow player has four vertical pieces in the second column', () => {
    const _4hRBoard = _.map(emptyBoard, _.clone);
    _4hRBoard[5][0] = 'R';
    _4hRBoard[4][0] = 'R';
    _4hRBoard[3][0] = 'R';
    _4hRBoard[5][1] = 'Y';
    _4hRBoard[4][1] = 'Y';
    _4hRBoard[3][1] = 'Y';
    _4hRBoard[2][1] = 'Y';
    console.log(_4hRBoard);
    expect(connectFour(_4hRBoard)).to.be.equal('Y');
  });
  it('Printing diagonal', () => {

    const leftDiagonal = () => {
      var array = ['ABCD', 'EFGH', 'IJKL'];
      console.log(array);

      var Ylength = array.length;
      var Xlength = array[0].length;
      var maxLength = Math.max(Xlength, Ylength);
      var temp;
      let output = [];
      for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
        temp = [];
        for (var y = Ylength - 1; y >= 0; --y) {
          var x = k - y;
          if (x >= 0 && x < Xlength) {
            temp.push(array[y][x]);
          }
        }
        output.push(temp);
      }
      return output;

    };
    console.log(leftDiagonal());
  });
});
