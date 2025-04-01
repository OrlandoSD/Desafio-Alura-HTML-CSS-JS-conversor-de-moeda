function jogar() {
    // Opções do jogo
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    
    // Escolha do jogador
    let escolhaJogador = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();
    
    // Validar se a escolha do jogador é válida
    if (!opcoes.map(opcao => opcao.toLowerCase()).includes(escolhaJogador)) {
      alert("Escolha inválida! Tente novamente.");
      return;
    }
  
    // Escolha do computador (random)
    let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
  
    // Lógica do jogo
    let resultado = "";
    
    if (escolhaJogador === escolhaComputador.toLowerCase()) {
      resultado = "Empate!";
    } else if (
      (escolhaJogador === "pedra" && escolhaComputador === "Tesoura") ||
      (escolhaJogador === "papel" && escolhaComputador === "Pedra") ||
      (escolhaJogador === "tesoura" && escolhaComputador === "Papel")
    ) {
      resultado = "Você venceu!";
    } else {
      resultado = "Você perdeu!";
    }
  
    // Exibe o resultado
    alert(`Você escolheu: ${escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1)}\nComputador escolheu: ${escolhaComputador}\n${resultado}`);
  }
  