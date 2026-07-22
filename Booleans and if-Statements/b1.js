function playGame(playerMove)
{
    let randomNumber = Math.random();
    
    let computerMove = '';

    if(randomNumber < 1/3)
    {
        computerMove = "Rock";
    }
    else if(randomNumber < 2/3)
    {
        computerMove = "Paper";
    }
    else
    {
        computerMove = "Scissors";
    }

    let result = "";

    if(playerMove == "Rock")
    {
        if(computerMove == "Rock")
        {
            result = "It's a Tie!";
        }
        else if(computerMove == "Paper")
        {
            result = "Computer wins!";
        }
        else
        {
            result = "You win!"
        }
    }
    else if(playerMove == "Paper")
    {
        if(computerMove == "Rock")
        {
            result = "You win!";
        }
        else if(computerMove == "Paper")
        {
            result = "It's a tie!";
        }
        else
        {
            result = "Computer wins!";
        }
    }
    else if(playerMove == "Scissors")
    {
        if(computerMove == "Rock")
        {
            result = "Computer wins!";
        }
        else if(computerMove == "Paper")
        {
            result = "You win!";
        }
        else
        {
            result = "It's a tie!";
        }
    }

    alert(
        "You chose: " + playerMove + 
        "\nComputer chose: " + computerMove +
        "\n\n" + result
    );
}