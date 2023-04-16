/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`~~~ Boas vindas ao jogo de Blackjack! ~~~\n`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let iniciateRound = confirm(`Quer iniciar uma rodada?`);
if (!iniciateRound) {
  console.log(`\n~ Que pena, volte pra jogar quando quiser ~`);
}
while (iniciateRound) {
  let userCards = [];
  let userScore = 0;
  let computerCards = [];
  let computerScore = 0;

  for (i = 0; i < 2; i++) {
    let round = 1;
    if (round === 1) {
      const carta = comprarCarta();
      userCards.push(carta.texto);
      userScore += carta.valor;
      round = 2;
    }
    if (round === 2) {
      const carta = comprarCarta();
      computerCards.push(carta.texto);
      computerScore += carta.valor;
      round = 1;
    }
  }

  console.log(
    `\nUsuário - cartas: ${userCards[0]}, ${userCards[1]} - pontuação ${userScore}`
  );
  console.log(
    `Computador - cartas: ${computerCards[0]}, ${computerCards[1]} - pontuação ${computerScore}`
  );

  if (userScore > 21 || computerScore > 21) {
    if (userScore > 21 && computerScore > 21) {
      console.log(`\n      ~~~~~ Ninguém ganhou! ~~~~~`);
    } else if (userScore > 21) {
      console.log(`\n      ~~~~ O computador ganhou! ~~~~`);
    } else {
      console.log(`\n      ~~~~ O usuário ganhou! ~~~~~`);
    }
  } else {
    if (userScore > computerScore) {
      console.log(`\n      ~~~~ O usuário ganhou! ~~~~~`);
    } else if (userScore < computerScore) {
      console.log(`\n      ~~~~ O computador ganhou! ~~~~`);
    } else {
      console.log(`\n      ~~~~~~~~~ Empate! ~~~~~~~~~`);
    }
  }
  iniciateRound = confirm(`Quer iniciar uma nova rodada?`);
  if (!iniciateRound) console.log(`\n      ~~~~~~~ Fim de jogo ~~~~~~~~`);
}
