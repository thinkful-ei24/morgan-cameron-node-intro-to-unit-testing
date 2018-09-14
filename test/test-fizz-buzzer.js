'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer function
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function(){
  it('returns the appropriate response when a number is passed in', function(){
    const normalCases = [
      {num: 1, expected: 1},
      {num: 6, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 101, expected: 101}
    ];
    for(let i of normalCases) {
      const answer = fizzBuzzer(i.num);
      expect(answer).to.equal(i.expected);
    } 
  });

  it('returns error when a non-number is passed in', function(){
    const edgeCases = [true, 'a', null, '8'];
    edgeCases.forEach(i => {
      expect(function(){
        fizzBuzzer(i);}).to.throw(Error);
    });
  });
});