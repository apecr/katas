const expect = require('chai').expect;
const encodeRailFenceCipher = require('../encode').encodeRailFenceCipher;
const decodeRailFenceCipher = require('../encode').decodeRailFenceCipher;

/* global define, it, describe, before, beforeEach, afterEach, after */
describe('Rail Fence Cipher: Encoding and Decoding', () => {
  it('Hello World! in three rails', () => {
    expect(encodeRailFenceCipher('Hello, World!', 3)).to.be.equal('Hoo!el,Wrdl l');
  });
  it('Hello World! in two rails', () => {
    expect(encodeRailFenceCipher('Hello, World!', 2)).to.be.equal('Hlo ol!el,Wrd');
  });
  it('Hello World! in four rails', () => {
    expect(encodeRailFenceCipher('Hello, World!', 4)).to.be.equal('H !e,Wdloollr');
  });
  it('WEAREDISCOVEREDFLEEATONCE in three rails', () => {
    expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).to.be.equal('WECRLTEERDSOEEFEAOCAIVDEN');
  });
  it('Decoding two rails Hello, World!', () => {
    expect(decodeRailFenceCipher('Hlo ol!el,Wrd', 2)).to.be.equal('Hello, World!');

  });
});