//Challenge 1: Your age in Days
function ageInDays() {
    
    var birthYear = prompt('What year were you born ?');
    var ageInDayss = (2020- birthYear) *365; 
    var h1 = document.createElement('h1'); // tworzymy zwykły h1
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays'); // dopisz jako id ageindays do h1 z calym tym napisem
    h1.appendChild(textAnswer); // dodaje do tego h1 naszą wiadomość textanswer
    document.getElementById('flex-box-result').appendChild(h1); // do tego id flex-box itd dodajemy te całe h1 z tekstem, utworzylismy w html pustego diva do ktorego js nam wrzuc tekst 



    
}

function reset() {
    document.getElementById('ageInDays').remove();
}
function generatorCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/3o6gbabfEOZGMxUTV6/giphy.gif";
    div.appendChild(image);


}

//Chalenge 3: Rock, Paper, Scissors 
function rpsGame(yourChoice) {  // bierze cały img src
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;  // human choice pobierze napis rock
    botChoice =numberToChoice(randToRpsInt());
    console.log(botChoice);
    
    results = decideWinner(humanChoice, botChoice); //[1, 0] human lost | bot won
    
    message = finalMessage(results); //"You won!", color:green
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random() *3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore ===0){
        return {'message': 'You lost!', 'color': 'red'};
        
    }else if (yourScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'};
    }else{
        return {'message': 'You won', 'color': 'green'};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    const imagesDatebase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src,
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src='" +  imagesDatebase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatebase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>" 
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv); 
    document.getElementById('flex-box-rps-div').appendChild(messageDiv); 
    document.getElementById('flex-box-rps-div').appendChild(botDiv); 
}