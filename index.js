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
      alert(`You chose Rock, Computer chose ${computermove}, ${result}`);
  }else if(playermove==='Paper'){
    
       const computermove1=computerchoice();
       let result1='';
      if(computermove1==='Rock'){
        result1='You Win';
      }else if(computermove1==='Paper'){
        result1='It is a draw'; 
      }else{
        result1='You Lose';
      }
      alert(`You chose Paper, Computer chose ${computermove1}, ${result1}`);
  }else{
    
       const computermove2=computerchoice();
       let result2='';
      if(computermove2==='Rock'){
        result2='You Lose';
      }else if(computermove2==='Scissors'){
        result2='It is a draw'; 
      }else{
        result2='You Win';
      }
      alert(`You chose Scissors, Computer chose ${computermove2}, ${result2}`);
  }
}
