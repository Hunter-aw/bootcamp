var addNumbers = function (x, y) {
    return x+y;
  };
  describe("addNumbers", function() {
    it("should add the two given numbers and return the sum", function() {
      var firstNum = 5;
      var secondNum = 5;
  
      var expectedResult = 10;
  
      var actualResult = addNumbers(firstNum, secondNum);
  
      expect(actualResult).toBe(expectedResult);
    });
    it("should be able to add two negative numbers", function () {
        var firstNum = -5;
        var secondNum = -3;

        var expectedResult = -8;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
    it("should be able to add a postive and a negative number", function () {
        var firstNum = 5;
        var secondNum = -3;

        var expectedResult = 2;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
    it("should be able to add a positive number and zero", function () {
        var firstNum = 5;
        var secondNum = 0;

        var expectedResult = 5;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
    it("should be able to add a negative number and zero", function () {
        var firstNum = 0;
        var secondNum = -3;

        var expectedResult = -3;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
    it("should be able to add two zero numbers", function () {
        var firstNum = 0;
        var secondNum = 0;

        var expectedResult = 0;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
    it("should treat null as 0", function () {
        var firstNum = 5;
        var secondNum = null;

        var expectedResult = 5;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
    it("should treat null as 0 with a negative number", function () {
        var firstNum = -5;
        var secondNum = null;

        var expectedResult = -5;

        var actualResult = addNumbers(firstNum, secondNum);

        expect(actualResult).toBe(expectedResult);
    })
  });