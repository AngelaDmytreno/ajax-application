const getData = (url) => fetch(url)
  .then((response) => response.json())
  .then((json) => {
    if (json.Search) return json.Search;
    throw Error('Сервер вернул неправильный объект');
  });


inputSearch.addEventListener('keyup', (e) => {
  delay(() => {
    const searchString = e.target.value;
    if (searchString && searchString.length > 4) if (!triggerMode) clearMoviesMarkup();

    getData(`http://www.omdbapi.com/?s=${searchString}&apikey=18b8609f`)
      .then(movies => movies.forEach(movie => addMovieToList(movie)))
      .catch(err => console.log(err));

  }, 1000);

});


