const expect = require('chai').expect;
const whoEatsWho = require('../index').whoEatsWho;

/* global define, it, describe, before, beforeEach, afterEach, after */
describe('The Hunger Games in the Zoo', () => {
  it('In the zoo are not animals who eat another animals', () => {
    const zoo = 'bug,grass';
    const output = whoEatsWho(zoo);
    expect(output).to.be.deep.equal([zoo, zoo]);
  });
  it('Two animals, one eats the other on its right', () => {
    const zoo = 'antelope,grass';
    const output = whoEatsWho(zoo);
    expect(output).to.be.deep.equal([zoo, 'antelope eats grass', 'antelope']);
  });
  it('Two animals, one eats the other on its left', () => {
    const zoo = 'grass,antelope';
    const output = whoEatsWho(zoo);
    expect(output).to.be.deep.equal([zoo, 'antelope eats grass', 'antelope']);
  });
  it('example', () => {
    var input = 'fox,bug,chicken,grass,sheep';
    var expected = 	[
      'fox,bug,chicken,grass,sheep',
      'chicken eats bug',
      'fox eats chicken',
      'sheep eats grass',
      'fox eats sheep',
      'fox'
    ];
    expect(whoEatsWho(input)).to.be.deep.equal(expected);
  });
  it('eatRightMulti', () => {
    const expected = ['giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda',
      'giraffe eats leaves',
      'giraffe eats leaves',
      'giraffe eats leaves',
      'bear eats bug',
      'bear eats leaves',
      'bear eats leaves',
      'giraffe,bear,panda'];
    expect(whoEatsWho('giraffe,leaves,leaves,leaves,bear,bug,leaves,leaves,panda')).to.be.deep.equal(expected);
  });
});