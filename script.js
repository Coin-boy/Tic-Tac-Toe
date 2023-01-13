let boxes = document.querySelectorAll('.box')
const gameOver = document.querySelector('.game_over')
const boxContainer = document.querySelector('.box_container')
const button = document.querySelector('.button')
const Player_turn = document.querySelector('.player_turn')
console.log(button)

const Totalturns = 9;
const Players = ['O','X']
let count = 0;
let diagonals = ['a','b','c','d','e','f','g','h']
let Winner = {
    a:[0,1,2],
    b:[0,3,6],
    c:[2,5,8],
    d:[2,4,6],
    e:[3,4,5],  
    f:[6,7,8 ], 
    g:[7,4,1], 
    h:[0,4,8],
    
    
}

const checkWinner = ([a,b,c]) => {
    if(boxes[a].textContent == 'X' && boxes[b].textContent == 'X' && boxes[c].textContent == 'X'){
        console.log(`Player X wins`)
         gameOver.textContent = `Player X wins`
         gameOver.classList.remove('hidden')
        boxContainer.classList.add('hidden')  
    }
   
    if(boxes[a].textContent =='O' && boxes[b].textContent == 'O' && boxes[c].textContent == 'O'){
        console.log(`Player O wins`)
        gameOver.textContent = `Player O wins`
        gameOver.classList.remove('hidden')
        boxContainer.classList.add('hidden')  
    }
   
   
};

const reset = function(){
    window.location.reload();


}

for(let i = 0; i <= 8; i++){
    boxes[i].addEventListener('click', function (){
            let player;
            count +=1;
            console.log(count)
            
            if(count >= 9){
                console.log('game over')
                gameOver.classList.remove('hidden')
                boxContainer.classList.add('hidden')

            }
            if(count % 2 === 1 ){
                player = Players[1]
                boxes[i].textContent = 'X'; 
                Player_turn.textContent = 'Player O turn';

            }else {
                player = Players[0];
                boxes[i].textContent = 'O';
                Player_turn.textContent = 'Player X turn';
                             
            }
            for(i of diagonals){
                checkWinner(Winner[i])
            }
            
        })
        
    console.log(boxes[i].textContent)
    
    };

    button.addEventListener('click',function(){
        reset()
    })
