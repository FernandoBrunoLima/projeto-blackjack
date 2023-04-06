// prompt para iniciar jogo
let startRound = confirm(
  `~ Boas vindas ao jogo Blackjack! ~\nQuer iniciar uma rodada?`
);

//se negativo
if (!startRound) {
  alert(`\n~ Que pena, volte pra jogar quando quiser ~`);
  //se positivo
} else {
  // fazer loop enquanto starRound for positivo
  do {
    let userCards = [];
    let userScore = 0;
    let computerCards = [];
    let computerScore = 0;

    // solicitar duas cartas para cada; se tiver dois As, reinicia o jogo
    do {
      userCards = [];
      userScore = 0;
      computerCards = [];
      computerScore = 0;

      for (let i = 0; i < 4; i++) {
        if (i === 0 || i === 2) {
          const card = comprarCarta();
          userCards.push(card.texto);
          userScore += card.valor;
        } else if (i === 1 || i === 3) {
          const card = comprarCarta();
          computerCards.push(card.texto);
          computerScore += card.valor;
        }
      }
    } while (
      (userCards[0] === "A" && userCards[1] === "A") ||
      (computerCards[0] === "A" && computerCards[1] === "A")
    );

    // mostrar mensagem após primeiras rodadas automáticas sobre se continua
    let message = `Suas cartas são: ${userCards.join(
      " "
    )}.\nA carta revelada do computador é ${
      computerCards[0]
    }\nDeseja comprar mais uma carta?`;

    let continueRound = confirm(message);
    let roundEnded = false;

    // se continuar round for negativo entra no if para encerrar com resultado
    if (!continueRound) {
      if (userScore > computerScore) {
        roundEnded = true;
        message = `Usuário - Cartas: ${userCards.join(
          " "
        )} - Pontuação: ${userScore}\nComputador - Cartas: ${computerCards.join(
          " "
        )} - Pontuação: ${computerScore}\nO usuário ganhou!`;
        alert(message);
      } else if (userScore < computerScore) {
        roundEnded = true;
        message = `Usuário - Cartas: ${userCards.join(
          " "
        )} - Pontuação: ${userScore}\nComputador - Cartas: ${computerCards.join(
          " "
        )} - Pontuação: ${computerScore}\nO computador ganhou!`;
        alert(message);
      } else if (userScore === computerScore) {
        roundEnded = true;
        message = `Usuário - Cartas: ${userCards.join(
          " "
        )} - Pontuação: ${userScore}\nComputador - Cartas: ${computerCards.join(
          " "
        )} - Pontuação: ${computerScore}\nEmpate!`;
        alert(message);

        // se continuar for positivo entrar nesse else para continuar comprando cartas
      } else {
        while (continueRound && !roundEnded) {
          const card = comprarCarta();
          userCards.push(card.texto);
          userScore += card.valor;
          card = comprarCarta();
          computerCards.push(card.texto);
          computerScore += card.valor;

          if (userScore > 21) {
            roundEnded = true;
            message = `Usuário - Cartas: ${userCards.join(
              " "
            )} - Pontuação: ${userScore}\nComputador - Cartas: ${computerCards.join(
              " "
            )} - Pontuação: ${computerScore}\nO computador ganhou!`;
            alert(message);
          } else if (computerScore > 21) {
            roundEnded = true;
            message = `Usuário - Cartas: ${userCards.join(
              " "
            )} - Pontuação: ${userScore}\nComputador - Cartas: ${computerCards.join(
              " "
            )} - Pontuação: ${computerScore}\nO usuário ganhou!`;
            alert(message);
          } else {
            message = `Suas cartas são: ${userCards.join(
              " "
            )}.\nA carta revelada do computador é ${
              computerCards[0]
            }\nDeseja comprar mais uma carta?`;
            continueRound = confirm(message);
          }
        }
      }
    }
  } while (startRound);
  startRound = confirm("Quer iniciar uma nova rodada?");
}
