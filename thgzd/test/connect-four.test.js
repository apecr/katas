const expect = require('chai').expect;
const connectFour = require('../connect-four');
const _ = require('lodash');
const mathjs = require('mathjs');
const mocha = require('mocha');

/* global define, it, describe, before, beforeEach, afterEach, after */
describe('Connect Four game determine winner function', () => {
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
    expect(connectFour.connectFour(emptyBoard)).to.be.equal('in progress');
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
    expect(connectFour.connectFour(_4hRBoard)).to.be.equal('R');
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
    expect(connectFour.connectFour(_4hRBoard)).to.be.equal('R');
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
    expect(connectFour.connectFour(_4hRBoard)).to.be.equal('R');
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
    expect(connectFour.connectFour(_4hRBoard)).to.be.equal('Y');
  });
  it('Should say Y because yellow player has one diagonal', () => {
    const _4hRBoard = _.map(emptyBoard, _.clone);
    _4hRBoard[5][2] = 'R';
    _4hRBoard[5][3] = 'Y';
    _4hRBoard[5][1] = 'R';
    _4hRBoard[4][2] = 'Y';
    _4hRBoard[4][1] = 'R';
    _4hRBoard[3][1] = 'Y';
    _4hRBoard[5][0] = 'R';
    _4hRBoard[4][0] = 'Y';
    _4hRBoard[3][0] = 'R';
    _4hRBoard[2][0] = 'Y';
    console.log(_4hRBoard);
    expect(connectFour.connectFour(_4hRBoard)).to.be.equal('Y');
  });
  it('Should say R', () => {
    const board = [
      ['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'],
      ['R', 'Y', 'R', 'R', 'R', 'R', 'Y'],
      ['Y', 'Y', 'R', 'R', 'R', 'Y', 'R'],
      ['R', 'R', 'R', 'Y', 'Y', 'R', 'Y'],
      ['Y', 'Y', 'Y', 'R', 'Y', 'R', 'Y'],
      ['R', 'Y', 'R', 'R', 'R', 'Y', 'R']];
    console.log(board);
    expect(connectFour.connectFour(board)).to.be.equal('R');
  });
  it('Should say Y because a negative diagonal', () => {
    const board = [['-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', 'Y', '-', '-'], ['-', '-', '-', 'Y', 'R', '-', '-'], ['-', 'R', 'Y', 'R', 'Y', '-', '-'], ['R', 'Y', 'R', 'Y', 'R', 'Y', 'R']];
    console.log(board);
    expect(connectFour.connectFour(board)).to.be.equal('Y');
  });
  it('Should say draw because the board is full', () => {
    const board =  [['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'], ['R', 'Y', 'R', 'R', 'Y', 'R', 'Y'], ['Y', 'Y', 'R', 'R', 'R', 'Y', 'R'], ['R', 'R', 'Y', 'Y', 'Y', 'R', 'Y'], ['Y', 'Y', 'Y', 'R', 'Y', 'R', 'Y'], ['R', 'Y', 'R', 'R', 'R', 'Y', 'R']];
    console.log(board);
    expect(connectFour.connectFour(board)).to.be.equal('draw');
  });
  it('Should say R', () => {
    const board = [['Y', 'R', 'Y', 'R', 'Y', 'R', 'Y'], ['R', 'Y', 'R', 'R', 'Y', 'R', 'Y'], ['Y', 'Y', 'R', 'R', 'R', 'Y', 'R'], ['R', 'R', 'Y', 'Y', 'Y', 'R', 'Y'], ['Y', 'Y', 'Y', 'R', 'Y', 'R', 'R'], ['R', 'Y', 'R', 'R', 'R', 'Y', 'R']];
    console.log(board);
    expect(connectFour.connectFour(board)).to.be.equal('R');
  });
});
