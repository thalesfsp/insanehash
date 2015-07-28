/**
 * @author Thales Pinheiro
 * @since 10/07/2011
 * @requires assert
 * @requires insanehash
 * Tests for the package version of insanehash
 */

var assert = require('assert');
var ih = require('./lib/insanehash');

describe('Testing hash algorithms', function() {
  var blake32Hash = '4bb4063903e32cfd3090bfd6d91061485472d6cf728bc14acba6c39643d71f2b';

  it('Blake32: "aáâã09!?.,<>" should be ' + blake32Hash, function() {
    assert.equal(ih.blake32('aáâã09!?.,<>'), blake32Hash);
  });

  var bmwHash = '93660bebababf5e3e5352313bb8d7fa2cc34bc71bc502d55c03b63edb68cea12';

  it('BMW: "aáâã09!?.,<>" should be ' + bmwHash, function() {
    assert.equal(ih.bmw('aáâã09!?.,<>'), bmwHash);
  });

  var cubehashHash = 'f86b5425c1a8f52657b45bbf77ad3ec5ceb6e0d1aa6822b375e884a9d4ba7e3c';

  it('CubeHash: "aáâã09!?.,<>" should be ' + cubehashHash, function() {
    assert.equal(ih.cubehash('aáâã09!?.,<>'), cubehashHash);
  });

  var skeinHash = '63d9a30b28b5ad4e76b48006cdf95d5bbf3fbb62cb323d3e287b70f9cf2aeec56abb1ecee24cf48d8802442443089fc7668e5f740d9058a085f8282348f2cd94';

  it('Skein: "aáâã09!?.,<>" should be ' + skeinHash, function() {
    assert.equal(ih.skein('aáâã09!?.,<>'), skeinHash);
  });

  var halfSkeinHash = 'b2ffda9be2290036bbeebf7dc1abf7da509893cfe470b511e5adc0ca8d746ca1';

  it('HalfSkein: "aáâã09!?.,<>" should be ' + halfSkeinHash, function() {
    assert.equal(ih.halfskein('aáâã09!?.,<>'), halfSkeinHash);
  });

  var shabalHash = '8f0536c71734cf44802ab92f37f0be86e8c712ca6901afacf926127213a19846';

  it('Shabal: "aáâã09!?.,<>" should be ' + shabalHash, function() {
    assert.equal(ih.shabal('aáâã09!?.,<>'), shabalHash);
  });

  var keccakHash = '457759f5a6763727e053779f14ecf34f81b8bc5f4ab04514acf9e1306f94650f';

  it('Keccak: "aáâã09!?.,<>" should be ' + keccakHash, function() {
    assert.equal(ih.keccak('aáâã09!?.,<>'), keccakHash);
  });
});
