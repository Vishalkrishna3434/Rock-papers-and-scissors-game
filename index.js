const score=JSON.parse(localStorage.getItem('score')) || {
     Won : 0,
     Lost : 0,
     Draws : 0
  }
let isautoplaying=false;
let intervalid;
function computerchoice(){
    const computerchoice=Math.random();
    let resultOfComputer;
    if(computerchoice>=0 && computerchoice<1/3){
      resultOfComputer="Rock";
    }else if(computerchoice>=1/3 && computerchoice<2/3){
      resultOfComputer="Paper";
    }else{
      resultOfComputer="Scissors";
    }
    return resultOfComputer;
}
document.querySelector(".js-rock-button").addEventListener('click',()=>{
  playGame('Rock');
});
document.querySelector(".js-paper-button").addEventListener('click',()=>{
   playGame('Paper');
});
document.querySelector(".js-scissors-button").addEventListener('click',()=>{
   playGame('Scissors');
});
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('Rock');
  }else if(event.key==='p'){
    playGame('Paper');
  }else if(event.key==='s'){
    playGame('Scissors');
  }
})
function playagain(){
   if(!isautoplaying){
    intervalid=setInterval(function(){
      const com=computerchoice();
      playGame(com);
    },1000);
    isautoplaying=true;
   }else{
    clearInterval(intervalid);
    isautoplaying=false;
   }
}
function resetscore(){
  score.Won=0;
  score.Lost=0;
  score.Draws=0;
  localStorage.removeItem('score');
  showscore();
}

document.addEventListener('DOMContentLoaded', () => {
    showscore();
    showresult("Pick your move");
    showmoves("None", "None");
});

function showresult(result){
   document.querySelector('.display_result').innerHTML=`${result}`;
}

function showmoves(computermove,playermove){
    document.querySelector('.display_moves').innerHTML=`Your move is : ${playermove} and Computer move is : ${computermove}`
}

function showscore(){
  document.querySelector('.display_score').innerHTML=`Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`;
} 

function playGame(playermove){
  if(playermove==='Rock'){
    const computermove=computerchoice();
       let result='';
      if(computermove==='Rock'){
        result='It is a draw';
      }else if(computermove==='Paper'){
        result='You Lose'; 
      }else{
        result='You Win';
      }
      if(result==='It is a draw'){
        score.Draws+=1;
      }else if(result==='You Lose'){
        score.Lost+=1;
      }else{
        score.Won+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      showresult(result);
      showmoves(computermove,playermove);
      showscore();
      if(!isautoplaying){
      alert(`You chose Rock, Computer chose ${computermove}, ${result}
Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`);
      }
  }else if(playermove==='Paper'){
       const computermove=computerchoice();
       let result='';
      if(computermove==='Rock'){
        result='You Win';
      }else if(computermove==='Paper'){
        result='It is a draw'; 
      }else{
        result='You Lose';
      }
      if(result==='It is a draw'){
        score.Draws+=1;
      }else if(result==='You Lose'){
        score.Lost+=1;
      }else{
        score.Won+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      showresult(result);
      showmoves(computermove,playermove);
      showscore();
      if(!isautoplaying){
      alert(`You chose Paper, Computer chose ${computermove}, ${result}
Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`);
      }
  }else{
       const computermove=computerchoice();
       let result='';
      if(computermove==='Rock'){
        result='You Lose';
      }else if(computermove==='Scissors'){
        result='It is a draw'; 
      }else{
        result='You Win';
      }
      if(result==='It is a draw'){
        score.Draws+=1;
      }else if(result==='You Lose'){
        score.Lost+=1;
      }else{
        score.Won+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      showresult(result);
      showmoves(computermove,playermove);
      showscore();
      if(!isautoplaying){
      alert(`You chose Scissors, Computer chose ${computermove}, ${result}
Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`);
  }
}
}
 