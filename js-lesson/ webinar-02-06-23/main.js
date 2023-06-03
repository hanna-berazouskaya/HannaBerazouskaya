const min = 0
const max = 100
const attemptsNumber = 10 
const randomNumber = getRandomNumber()
const playerName = getPlayerName()

function getRandomNumber(){
    const randomNumber = Math.round(Math.random() * 100)
    return randomNumber
}

function getPlayerName(){
    const playerName = prompt('Как тeбя зовут?','')
    return playerName
}

function superGame(min, max, attemptsNumber, randomNumber, playerName){
    alert(`Привет ${playerName}! Я загадал число от ${min} до ${max}. У тебя есть ${attemptsNumber} попыток. Вводи только числа, иначе ты меня сломаешь!`)

    let playerAnswers=[]

    for (let attempt=1; attempt<= attemptsNumber; attempt++){
        let playerAnswer = parseFloat (prompt('Введите число',''))

        while(isNaN(playerAnswer)){
        playerAnswer = parseFloat (prompt('Введите число',''))
        }

        if (playerAnswer > randomNumber){
            alert(`Моё число меньше! У тебя осталось ${attemptsNumber - attempt} попыток`)
            playerAnswers.push(playerAnswer)
        } else if (playerAnswer < randomNumber){
            alert(`Моё число больше! У тебя осталось ${attemptsNumber - attempt} попыток`)
            playerAnswers.push(playerAnswer)
        } else{
            alert(`Поздравляю! Ты угадал мою зловещую тайну за ${attempt} попыток`)
            return 
        }
    }
    alert(`Ты не справился за ${attemptsNumber} попыток. Я загадал ${randomNumber}. А твои ответы - ${playerAnswers}`)
}

superGame (min, max, attemptsNumber, randomNumber, playerName)