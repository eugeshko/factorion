/**
* Считает факториал числа number.
*/
function factorial(number){
  if (number <= 1)
    return 1;
  return number * factorial(number - 1);
}
/**
* Выводит на экран выражение равенства факториалов цифр числа number числу number.
*/
function niceoutput(number){
    for (var i = 0; i < String(number).length-1; i++){
        document.write(String(number).charAt(i) + "!" + " + ");
    }
    document.write(String(number).charAt(i) + "!" + " = " + number + "<br>");
}

var factorials = [];
/**
* Записываем в массив factorials факториалы чисел от 0 до 9, 
* чтобы не считать их каждый раз заново.
*/
for (var i = 0; i < 10; i++) {
  factorials[i] = factorial(i);
}
/**
* Чтобы найти верхнюю границу поиска, необходимо определить
* максимальное количество разрядов искомого числа. 
* Сумма фактриалов n-значного числа не больше 9! * n,  
* при n == 8 получаем 2903040 (7-значное число).
* Следовательно, искомые числа не больше, чем 7-значные, а точнее
* они меньше 9! * 7 = 2540160.
*/
for(var count = 1; count < 2540160; count++) {
    var j = 0;
    var sum = 0;
    
    while ((j < String(count).length) && (sum <= count)){
      /**
      * Чтобы уменьшить число операций, исключим числа,
      * у которых сумма факториалов первых нескольких цифр превосходит само число.
      */
      if ((sum + factorials[String(count).charAt(j)]) > count){
        count += (10 - String(count).charAt(j)) * Math.pow(10, String(count).length - j - 1) - 1;
        j = String(count).length;
      } 
      else{
        sum += factorials[String(count).charAt(j)];
        j++;
      }
    } 
    if (sum == count) niceoutput(count);
}