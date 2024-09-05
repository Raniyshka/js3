'use strict';

//1
let stoim = prompt('Введите стоимость товара: ', 1000);
let dengi = prompt('Введите количество ваших денег: ', 1500);
if(stoim > 0 && dengi > 0 && Number(stoim) && Number(dengi)){
    if(stoim == dengi){
        alert('Покупка совершена');
    }else if(stoim>dengi){
        let nehvat = stoim-dengi;
        alert('Для покупки не хватает: ' + nehvat);
    }else{
        let sdacha = dengi - stoim;
        alert('Покупка совершена. Сдача: '+ sdacha);
}}else{
    alert('Неверный формат ввода')
}

//2
let num = prompt('Введите число');
if(Number(num) || num==0){
     if(num>0){
        alert(1);
    }else if(num<0){
        alert(-1);
    }else{
        alert(0);
}}else{
    alert('Неверный формат ввода');
}

//3
let a = prompt('Введите число:', 3);
let b = prompt('Введите число:', 2);
let result = (a+b<4) ? 'Мало' : 'Много';
alert(result);


//4
let login = prompt('Введите логин', 'Сотрудник');
let message = (login=='Сотрудник') ? 'Привет' : (login=='Директор') ? 'Здравствуйте' : (login=='') ? 'Нет логина' : '';
alert(message);

//5
let login2 = prompt('Введите второй логин', 'Админ');
if(login2 == 'Админ'){
    let pass = prompt('Введите пароль');
    if(pass == 'Я главный'){
        alert('Здравствуйте!');
    }else if(pass != 'Я главный'){
        alert('Неверный пароль');
    }else if(pass == ''){
        alert('Отменено');
    }else{
        alert('Отменено');
    }
}else if(login2 != 'Админ'){
    alert('Я вас не знаю');
}else if(login2 == ''){
    alert('Отменено');
}else{
    alert('Отменено');
}