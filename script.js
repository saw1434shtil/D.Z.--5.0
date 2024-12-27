let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

//Заново

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = (minValue <= -999) ? minValue = -999 : (minValue >= 999) ? minValue = 999 : minValue;
    maxValue = (maxValue >= 999) ? maxValue = 999 : (maxValue <= -999) ? maxValue = -999 : maxValue;
    if ((maxValue) < (minValue)) {
        [maxValue, minValue] = [minValue, maxValue];
    }
    if ((maxValue) || (minValue) || maxValue == '' || minValue == '') {
        minValue = -999;
        maxValue = 999;
    }
    answerNumber = Math.floor((parseInt(minValue) + parseInt(maxValue)) / 2);
    orderNumber = 1;
    gameRun = true;
   
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField'); 

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
   
})


// Больше

document.getElementById('btnOver').addEventListener('click', function (event) {
    event.preventDefault();
    if (gameRun){
        if (parseInt(minValue) == parseInt(maxValue)) {
            const phraseRandom = Math.round(Math.random() * 2);
            //const answerPhrase = (phraseRandom === 1 );
            if (phraseRandom == 0) {
                answerPhrase  = `Вы загадали неправильное число!\n\u{1F914}`;
            } else 
            if (phraseRandom == 1) {
                answerPhrase  = `Я сдаюсь..\n\u{1F92F}`;
            } else 
            if (phraseRandom == 2) {
                answerPhrase  = `Ой всё!\n\u{1F910}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `Вы загадали число ${answerNumber }?`;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Заклинаю, это число ${answerNumber }?`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Это число ${answerNumber }?`;
            }    
            answerField.innerText = answerPhrase ;
         }
    }
})

//Меньше

document.getElementById('btnLess').addEventListener('click', function (event) {
    event.preventDefault ();
    if (gameRun){
        if ((parseInt(minValue) == parseInt(maxValue)) || (parseInt(minValue) == parseInt(answerNumber))) {
            const phraseRandom = Math.round(Math.random() * 2);
            //const answerPhrase = (phraseRandom === 1);
            if (phraseRandom == 0) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else 
            if (phraseRandom == 1) {
                answerPhrase  = `Я сдаюсь..\n\u{1F92F}`;
            } else 
            if (phraseRandom == 2) {
                answerPhrase  = `А вы точно "число" загадали?\n\u{1F914}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((parseInt(minValue) + parseInt(maxValue)) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) {
                answerPhrase  = `Вы загадали ${answerNumber} ?`;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Это число ${answerNumber} ?`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Вы задумали ${answerNumber} ?`;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

//Верно

document.getElementById('btnEqual').addEventListener('click', function (event) {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
        if (phraseRandom == 0) {
            answerPhrase  = `Я всегда угадываю\n\u{1F60E}`;
        } else
        if (phraseRandom == 1) {
            answerPhrase = `Ничего сложного\n\u{1F60E}`;
        } else
        if (phraseRandom == 2) {
            answerPhrase  = `Даже не вспотел \n\u{1F60E}`;
        } 
        answerField.innerText = answerPhrase
        gameRun = false;
    }
})

