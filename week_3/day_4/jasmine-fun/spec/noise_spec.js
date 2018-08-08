var makeNoiseFunction = function () {
    return (this.noise);
  };

  var cat = {
    makeNoise: makeNoiseFunction,
    noise: "Meow!"
  };

  var dog = {
      makeNoise: makeNoiseFunction,
      noise: "Woof!"
  }
  
  cat.makeNoise();

  describe("makeNoiseFunction", function() {
    it("Should say Meow", function() {
   
        var expectedResult = "Meow!";
    
        var actualResult = cat.makeNoise();
    
        expect(actualResult).toBe(expectedResult);
      });
      it("Should say woof", function() {
   
        var expectedResult = "Woof!";
    
        var actualResult = dog.makeNoise();
    
        expect(actualResult).toBe(expectedResult);
      });
      it("a cat is not a dog", function() {
   
        var expectedResult = dog.makeNoise();
    
        var actualResult = cat.makeNoise();
    
        expect(actualResult).not.toBe(expectedResult);
      });
      it("calling the function w/o an object should return an error", function() {
   
        var expectedResult = undefined
    
        var actualResult = makeNoiseFunction();
    
        expect(actualResult).toBe(expectedResult);
      });
  })