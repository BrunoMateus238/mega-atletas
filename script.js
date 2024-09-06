document.querySelector('.search-button').addEventListener('click', function() {
  const athleteName = document.querySelector('.search-input').value.trim().toLowerCase();
  let resultsContainer = document.querySelector('.results-container');

  // Limpa resultados anteriores
  if (resultsContainer) {
      resultsContainer.innerHTML = '';
  } else {
      resultsContainer = document.createElement('div');
      resultsContainer.classList.add('results-container');
      document.querySelector('main').appendChild(resultsContainer);
  }

  // Simulação de dados de atletas
  const athletes = {
      'usain bolt': {
          link: 'https://pt.wikipedia.org/wiki/Usain_Bolt',
          info: 'Usain Bolt é um ex-velocista jamaicano, considerado o homem mais rápido do mundo.'
      },
      'michael phelps': {
          link: 'https://pt.wikipedia.org/wiki/Michael_Phelps',
          info: 'Michael Phelps é um ex-nadador americano, o atleta olímpico mais condecorado de todos os tempos.'
      },
      'serena williams': {
          link: 'https://pt.wikipedia.org/wiki/Serena_Williams',
          info: 'Serena Williams é uma tenista americana, amplamente considerada uma das maiores de todos os tempos.'
      }
  };

  if (athletes[athleteName]) {
      const athleteInfo = document.createElement('p');
      athleteInfo.textContent = athletes[athleteName].info;
      resultsContainer.appendChild(athleteInfo);

      const link = document.createElement('a');
      link.href = athletes[athleteName].link;
      link.textContent = `Saiba mais sobre ${athleteName}`;
      link.target = '_blank';
      resultsContainer.appendChild(link);
  } else {
      resultsContainer.textContent = 'Atleta não encontrado.';
  }
});
