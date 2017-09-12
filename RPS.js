      // Rock , Paper, Scissors Game
      
      // prompt user to choose
      
      var userChoice = prompt("Do you choose rock, paper or scissors?");
      var computerChoice = Math.random(); // variable = to # between 0 and 1
      
      // to see how mathrandom works-- print out math.random
      // should show 0.08906989803345089 to console
      
      console.log(computerChoice)
      
      console.log("Computer Choice:")
      
      if(computerChoice >=0 & computerChoice <=0.33){
          
       computerChoice = "rock"; 
       confirm("computer choice: rock"); 
      }
      else if(computerChoice >=0.34 & computerChoice <=0.66 ){
          
        computerChoice = "paper";  
           confirm("computer choice: paper"); 
      
      }
      
      else
      {
          
        computerChoice = "scissors";  
         confirm("computer choice: scissors"); 
      
      
      }
