let array2 = [1, 1, 1, 1, 1];
let array = [1, 1, 5, 10, 25, 30, 1, 88, 25, 105];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for(let i = 0; i < array.length; i++){
  if(typeof array[i] === "number"){
    if(array[i] === 0){
      zeroCount++;
    }else if(array[i] % 2 === 0){
      evenCount++;
    }else{
      oddCount++;
    }
  }
}

console.log("Количество четных элементов:", evenCount);
console.log("Количество нечетных элементов: ", oddCount);
console.log("Количество нулевых элементов:", zeroCount);


