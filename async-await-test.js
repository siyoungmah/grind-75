const waitALittle = (num) => {
  return new Promise(resolve => {
    const waitTime = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      console.log('Wait time: ', waitTime);
      resolve(num);
    }, waitTime);
  })
}

const asyncFunc = async () => {
  const num1 = await waitALittle(1);
  const num2 = await waitALittle(2);
  console.log('Before asyncFuncTwo!');
  await asyncFuncTwo (1, async (input) => {
    const var1 = await waitALittle(input);
    const var2 = await waitALittle(input);
    console.log('num1: ', num1, ', var1: ', var1);
    console.log('num2: ', num2, ', var2: ', var2);
  });


}

const asyncFuncTwo = async (input, cb) => {
  cb(input);
  input = await waitALittle(input) + 1; 
  console.log('asyncFuncTwo has finished!');
}

asyncFunc();