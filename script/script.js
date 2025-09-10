if (document.title === "Criativo") {

  // Lista de citações
  const quotes = [
    {
      text: "A criatividade é a inteligência a divertir-se.",
      author: "Albert Einstein"
    },
    {
      text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
      author: "Vidal Sassoon"
    },
    {
      text: "Não é a linguagem que faz o programador, mas sim a sua lógica.",
      author: "Desconhecido"
    },
    {
      text: "Onde estiver, seja lá como for, tenha fé porque até no lixão nasce flor.",
      author: "Racionais MC's"
    },
    {
      text: "Primeiro, resolva o problema. Depois, escreva o código.",
      author: "John Johnson"
    },
    {
      text: "A persistência realiza o impossível.",
      author: "Provérbio Chinês"
    },
    {
      text: "Comece onde você está. Use o que você tem. Faça o que você pode.",
      author: "Arthur Ashe"
    },
    {
      text: "Eu vim do balde de lixo e vou para o jardim das flores",
      author: "Jotapê"
    },
    {
      text: "Acordar é uma oportunidade que nem todos tem, sempre lembre-se disso",
      author: "Jotapê"
    }
  ];

  // Pega os elementos do HTML
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.getElementById('quote-author');
  const newQuoteButton = document.getElementById('new-quote-btn');

  // Função para gerar uma nova citação
  function generateNewQuote() {
    // Sorteia um número aleatório baseado no tamanho da lista
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Pega a citação sorteada
    const randomQuote = quotes[randomIndex];

    // Coloca a citação e o autor nos elementos HTML
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
  }

  // Adiciona o evento de clique ao botão
  newQuoteButton.addEventListener('click', generateNewQuote);

}