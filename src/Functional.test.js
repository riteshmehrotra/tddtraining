

///Non functional Code
function constructArray(size) {
    let foo = [];
  
    for (let index = 0; index < size; index++) {
      if (index % 2 === 0)
        foo.push(index * index);
      else
        foo.push(index + index);
    }
  
    return foo;
  }
  
  
//Test for non functional code

test('Validate a non functional array', () => {
  let size = 5;
  let arr = constructArray(size);

  expect(arr).toEqual([0,2,4,6,16]);
})



  //Functional code
  const multiplyFunction = x => x * x;
  
  const addFunction = x => x + x;
  
  const calculatorFunction = x => x % 2 === 0 ? multiplyFunction(x) : addFunction(x);
  
  
  
  const buildArr = (size = 0, f = calculatorFunction) =>
    size === 0
      ? []
      : [...buildArr(size - 1, f), f(size - 1)];
  
  
  
  

  
  //Test for non functional code
  test('Validate a functional array', () => {
    let size = 5;
    let arr = buildArr(size);
    expect(arr).toEqual([0,2,4,6,16]);
  })