const score={
     Won : 0,
     Lost : 0,
     Draws : 0
  }

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

function resetscore(){
  score.Won=0;
  score.Lost=0;
  score.Draws=0;
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
      alert(`You chose Rock, Computer chose ${computermove}, ${result}
Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`);
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
      alert(`You chose Paper, Computer chose ${computermove}, ${result}
Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`);
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
      alert(`You chose Scissors, Computer chose ${computermove}, ${result}
Won : ${score.Won} , Lost : ${score.Lost} and Draws : ${score.Draws}`);
  }
}
 