import axios from 'axios';

const loop = () => {
  return {
    names: ['Arturo', 'Max', 'Maria', 'Santi'],
    memes: [],
    init() {
      console.log('Initializing');
    },
    async getMemes() {
      console.log('Ver memes');
      await fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=196a545c0c6b8bb2fc5182a47e3b67a9'
      )
        .then((response) => response.json())
        .then((data) => {
          this.memes = data.results;
          console.log(this.memes);
        })
        .catch((error) => {
          // handle the error
        });
    },
  };
};

window.loop = loop;
