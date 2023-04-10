
let array2 = [1, 1, 1, 1, 1];
let array = [1, 1, 5, 10, 25, 30, 1, 88, 25, 105];
// array.forEach((elem,index)=>{
//   console.log(elem, index);
// })

let firstElement = array[0];
let isArrayElementsEqual = true;



for(let i = 0; i < array.length; i++){
if(array[i] !== firstElement){
  isArrayElementsEqual = false;
}
}
if(isArrayElementsEqual === true){
  console.log("Все элементы в массиве равны!")
}else{
  console.log("Все элементы в массиве не равны!")
}
