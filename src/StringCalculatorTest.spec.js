const StringCalculator = require('./StringCalculator');

describe('Kata StringCalculator', () => {
    it('It works', () => {
      expect(StringCalculator("0")).toBe(0);
    });

    it('Expect a text and return as a number', () => {
        expect(StringCalculator("1")).toBe(1);
      });

      it('Shoud return a 0 if is not a number', () => {
        expect(StringCalculator("a")).toBe(0);
      });

      it('Shoud return a 4 with letters', () => {
        expect(StringCalculator("2,a,2")).toBe(4);
      });

  });
  