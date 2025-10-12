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
    return computerchoice;
}

