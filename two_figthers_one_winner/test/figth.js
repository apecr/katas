const figth = require('../fight');
const Fighter = require('../fight').Fighter;
const expect = require('chai').expect;

/* global define, it, describe, before, afterEach */


describe('Testing different figths', () => {
  it('Should win Lew', () => {
    expect(figth.declareWinner(new Fighter('Lew', 10, 2),
      new Fighter('Harry', 5, 4),
      'Lew')).to.be.equal('Lew');
  });
  it('SHould win Harry', () => {
    expect(figth.declareWinner(new Fighter('Lew', 10, 2),
      new Fighter('Harry', 5, 4),
      'Harry')).to.be.equal('Harry');
  });
  it('Should win Harals', () => {
    expect(figth.declareWinner(new Fighter('Harald', 20, 5),
      new Fighter('Harry', 5, 4),
      'Harry')).to.be.equal('Harald');
  });
});