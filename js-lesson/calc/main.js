// Объявляем переменную "settings", которой присваиваем литерал объекта (объект)
// В объекте описываем настройки - ключ: значение. Пара ключ: значение должны разделяться запятой.
const settings = {
    max: 100,
    min: 0,
    attemptsNumber: 10,
    randomNumber: getRandomNumber(),
    playerName: getPlayerName()
};
// Как можно достать значение свойства из объекта:
// Через точечную нотацию - settings.max (100)
// Использую квадратные скобки - settings['min'] (0)

// Объявляем функцию "getRandomNumber", которая не принимает параметров.
function getRandomNumber() {
    // В теле функции объявляем переменную "randomNumber", которой присваиваем результат работы двух методов: round (округление числа до ближайшего целого), random (возвращает случайное число с плавающей запятой из диапазона от 0 до 1) объекта Math (встроенный объект, хранящий в своих свойствах и методах различные математические константы и функции). Так как метод "random" вернёт нам число в диапазоне от 0 до 1, а нам нужен диапазон чисел от 0 до 100, то полученное рандомное число умножим на 100. Но так как "random" возвращает число с плавающей запятой, то округляем его методом "round".
    const randomNumber = Math.round(Math.random() * 100);
    // Возвращаем значение переменной из функции
    return randomNumber;
};

function getPlayerName() {
     // В теле функции объявляем переменную "playerName", которой присваиваем результат работы встроенного в JS метода prompt (открывает диалоговое окно с сообзением, которое мы передаём в метод и возможностью ввести что-либо в текстовое поле). То, что мы введём в поле и будет присвоено переменной.
    const playerName = prompt('Как тебя зовут?', '');
    // Возвращаем значение переменной из функции
    return playerName;
};

// Объявляем функцию "game", которая принимает несколько параметров: min, max, attemptsNumber, randomNumber, playerName. Эти параметры будут использоваться в рамках описанной логики в теле функции. Если, при объявлении функции мы определили параметры, то при вызове этой функции параметры мы должны передать.
function game(min, max, attemptsNumber, randomNumber, playerName) {
    // В начале работы функции вызываем встроенный метод JS "alert" - открывает диалоговое окно и отображает сообщение, которое мы передали в этот метод.
    alert(`Привет ${playerName}!
    Я загадал число от ${min} до ${max}!
    У тебя есть ${attemptsNumber} попыток.
    Погнали?`);
    // Объявляем переменную "answersNumber" и присваиваем ей пустой массив. В этот массив мы будем добавлять каждый ответ игрока.
    let answersNumber = [];
    // Объявляем цикл "for", в котором: 
    // let attempt = 1; - отправная точка цикла. Данным выражением мы определили переменную, отвечающую за определённую попытку.
    // attempt <= attemptsNumber; - условие для цикла. Если попытка (attempt) меньше или равно количеству попыток (attemptsNumber), цикл прервётся. Условие проверяется перед каждой итерацией.
    // attempt++ - шаг цикла. Выполняется в конце каждой итерации. В контексте данной логики, увеличивает значение попытки на единицу. Т.е. на второй итерации значение переменной "attempt" будет 2, на третей - 3 и т.д.
    for (let attempt = 1; attempt <= attemptsNumber; attempt++) {
        // На каждой итерации цикла будем вызывать метод "prompt". 
        // В браузере в поле диалогового окна будем вводить что-либо. 
        // Это будет присвоено переменной "playerAnswer". 
        // Диалоговое окно будет всплывать на каждой итерации цикла (на каждой нашей попытке).
        let playerAnswer = parseFloat(prompt('Какое число я загадал?', ''))

        // Но ведь мы можем вместо числа ввести любые другие символы.
        // И тогда наша программа сломается.
        // Для этого мы результат работы "prompt" передаём в "parseFloat"
        // И перед основной проверкой мы запускаем цикл while (для чего, читай в файле Readme)
        while(isNaN(playerAnswer)){
            playerAnswer = parseFloat(prompt('Введите число!', ''))
        }

        // Используем переменную "playerAnswer" для проверки. Дословно: "Если ответ игрока (playerAnswer) больше рандомного числа (randomNumber) то выполни код, описанный в блоке ниже"
        if (playerAnswer > randomNumber) {
            // Код, который будет выполнен, если будет верным условие "playerAnswer > randomNumber".
            // Вызовется метод "alert". В диалоговом окне в браузере увидим сообщение:
            alert(`Моё число меньше! У тебя осталось ${attemptsNumber - attempt} попыток`);
            // В массив, который мы обпределили выше, с помощью метода массива "push", будет добавлен ответ игрока на текущей попытке.
            answersNumber.push(playerAnswer)
        // Если услови выше не будет верным, то будет проверено следующее условие. Дословно: "Иначе если ответ игрока (playerAnswer) меньше рандомного числа (randomNumber) то выполни код, описанный в блоке ниже"
        } else if (playerAnswer < randomNumber) {
            // Код, который будет выполнен, если будет верным условие "playerAnswer < randomNumber".
            // Вызовется метод "alert". В диалоговом окне в браузере увидим сообщение:
            alert(`Моё число больше! У тебя осталось ${attemptsNumber - attempt} попыток`);
            // В массив, который мы обпределили выше, с помощью метода массива "push", будет добавлен ответ игрока на текущей попытке.
            answersNumber.push(playerAnswer)
        // Если ни одно из условий выше не будет верным, то будет проверено следующее условие. Дословно: "Иначе выполни код, описанный в блоке ниже"
        } else {
            // Код, который будет выполнен, если ни одно из условий выше не будет верным. Мы сравнили ответ игрока с рандомным числом. Если оно не больше и не меньше, то оно равно. Соответственно игрок угадал рандомное число.
            // Вызовется метод "alert". В диалоговом окне в браузере увидим сообщение:
            alert('Поздравляю! Ты разгадал мою зловещую тайну!');
            // return оборвёт работу функции game. Так как игрок угадал число, то игра окончена.
            return
        }
    }
    // Если игрок на каждой итерации цикла не угадал рандомное число, то цикл закончится и будет выполнен следующий код. Тут отработает уже знакомый метод "alert", который покажет в диалоговом окне браузера сообщение:
    alert(`Упс! Ты не угадал мое число!
    Числа, которые ты ввел: ${answersNumber}
    А я загадал - ${randomNumber}`);
};

// Так как наши настройки определены в объекте. Чтобы не доставать каждую одним из способов, описанных выше, мы можем все свойства объекта достать таким образом: 
const {
    max, min, attemptsNumber, randomNumber, playerName
} = settings
// Фактически. Мы достаем все свойства (деструктуризация), и определяем их в одоименные переменные, которые можем использовать. Иначе можно было хаписать следующим образом (явно объявить соответствующие переменные):
// const max = settings.max;
// const min = settings.min;
// const attemptsNumber = settings.attemptsNumber;
// const randomNumber = settings.randomNumber;
// const playerName = settings.playerName;

// Чтобы игра запустилась, мы должны вызвать функцию "game". Не забываем передать ей параметры, которые определили, когда объявляли функцию.
game(min, max, attemptsNumber, randomNumber, playerName);

// В "alert" мы часто передавали странную на первый взляг строку: `Упс! Ты не угадал мое число! Числа, которые ты ввел: ${answersNumber} А я загадал - ${randomNumber}`. 
// Данный вид строкового литерала (строки) называется "шаблонная строка". Содержимое данной строки заключается в обратные кавычки ("бэктики") - `` - и её магия заключается в том, что в данные строки мы можем помещать любые JS-выражения. Например ${answersNumber}. Т.е. в строке будет включён результат этого выражения: значение переменной answersNumber.