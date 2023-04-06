let startRound = confirm(
  `~ Boas vindas ao jogo Blackjack! ~\nQuer iniciar uma rodada?`
);
while (startRound) {
  if (startRound) {
    // variaveis para salvar dados de usuário e computador
    let userCards = [];
    let userScore = 0;
    let computerCards = [];
    let computerScore = 0;

    // codigo para primeira jogada, onde cada jogador recebe duas cartas; com a regra de repetir jogada se um deles receber dois A's
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
    // encerramento de codigo de primeira rodada alimentando variaveis fora do escopo desse 'do' acima

    // mensagem perguntando se deseja continuar pedindo cartas
    let message = `Suas cartas são: ${userCards.join(
      " "
    )}.\nA carta revelada do computador é ${
      computerCards[0]
    }\nDeseja comprar mais uma carta?`;

    let continueRound = confirm(message);
    let roundEnded = false;

    // se desejar continuar fazer loop com compras de cartas
    if (continueRound) {
      while (continueRound && !roundEnded) {
        let card = comprarCarta();
        userCards.push(card.texto);
        userScore += card.valor;
        card = comprarCarta();
        computerCards.push(card.texto);
        computerScore += card.valor;

        if (userScore > 21 && computerScore > 21) {
          roundEnded = true;
          message = `Usuário - Cartas: ${userCards.join(
            " "
          )} - Pontuação: ${userScore}\nComputador - Cartas: ${computerCards.join(
            " "
          )} - Pontuação: ${computerScore}\nEmpate!`;
          alert(message);
        } else if (userScore > 21) {
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
    } else {
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
      }
    }
    message = `Deseja jogar mais uma rodada?`;
    startRound = confirm(message);
  } else {
    alert(`\n~ Que pena, volte pra jogar quando quiser ~`);
  }
}
