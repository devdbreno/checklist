'use strict'

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Todos',
      [
        {
          title: 'Ler A Vida Intelectual, A.D. Sertillanges',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Estudar Microservices...',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Gravar o vídeo: Express, Typescript & Docker',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Tomar uma xícara de café',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Ouvir podcasts',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Desenvolver-se',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Não ter preguiça mesmo tendo',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Ouvir Frank Sinatra',
          isDone: false,
          createdAt: new Date()
        },
        {
          title: 'Dormir... ZzzZzzZzz',
          isDone: false,
          createdAt: new Date()
        }
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Todos', null, {})
  }
}
