let Message = +prompt ("Ваше сообщение")
let result = Message;
  console.log("Тип данных: "+typeof(result)+ ", число которое ввел пользователь = "+ Message)
  
  if(typeof(Message)== "number" && !isNaN(Message)){
for (let i = 1; i <= Message; i++) {
  if(i % 2 == 0){
    console.log("Чётное")
}else{
  console.log("Не чётное")
}
}
}
else{
  console.log("Упс. Кажеться вы ошиблись.")
}