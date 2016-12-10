var chai = require('chai');
var palindrome = require('../api/routes/palindrome.js');
var tdd = chai.assert;

describe('Valid palindromes ', function() {
  it('ABA is palindrome', function(){
      tdd.isTrue(palindrome.utils.isPalindrome('ABA'));
  });
  it('A MAN A PLAN A CANAL PANAMA is palindrome', function(){
      tdd.isTrue(palindrome.utils.isPalindrome('A MAN A PLAN A CANAL PANAMA'));
  });
  it('Árara is palindrome', function(){
      tdd.isTrue(palindrome.utils.isPalindrome('Árara'));
  });
});

describe('Invalid palindromes', function() {
  it('MACACO is not a palindrome', function(){
      tdd.isNotTrue(palindrome.utils.isPalindrome('MACACO'));
  });
});

describe('Check text handling methods ', function() {
  it('ABÁ is equal to ABA', function(){
    tdd.equal(palindrome.utils.removeAccents("ABÁ"), 'ABA');
  });

  it('A-B-A is equal to ABA', function(){
    tdd.equal(palindrome.utils.removeUnwantedCharacters("A-B-A "), 'ABA');
  });
});
