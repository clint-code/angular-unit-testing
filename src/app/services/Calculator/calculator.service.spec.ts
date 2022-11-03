import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

//test suite: a function that sets out a series of test specs related to 
//either a piece of code or a section of functionality
describe('CalculatorService', () => {

  let mockLoggerService: any;
  let calculator: CalculatorService;

  beforeEach(() => {
    console.log("Calling before each");
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLoggerService);
  });

  //test spec: this contains one or more expectations, where we set out
  //what we expect the code tested to be able to do
  it('should add two numbers', () => {

    console.log("Calling add");
    let result = calculator.add(2,2);

    //expect expression: describes what we expect the function under test to do
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);

  });

  //test spec
  it('should subtract two numbers', () => {
    
    console.log("Calling subtract");
    let result = calculator.subtract(2,2);
    
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)

  });

});