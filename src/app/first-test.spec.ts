describe('First Test', () => {
   let testVariable: any;
   
   beforeEach(() => {
     testVariable = {};
   });

   it('should return true if a is true', () => {
    //arrange 
    testVariable.a  = false;

    //act
    testVariable.a = true;

    //assertion
    expect(testVariable.a).toBe(true);
   });
}); 