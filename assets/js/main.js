let movieList = null;
let inputSearch = null;
let triggerMode = false;
const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Arial, serif;
  }
  .container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  
  }

  
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    
  }
  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  
  }
  .movie__img {
    width: 100%;
    object-fit: cover;
  }
  .search{
    margin-bottom: 30px;
    
  }
  .search__checkbox{
    margin-left: 20px;
  }
  /* .search__label-input{
    margin-bottom: 10px;
    
  } */
  .search__input {
    padding: 10px 15px;
    width: 400px;
    display: flex;
    border: 1px solid  #cccccc;
    box-shadow: 1px 1px 1px 2px ;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .search__lebel-checkbox {
    font-size: 12px;
    display: block;
    margin-top: -27px;
    margin-left: 150px;
  }
  .search__btn{
    width: 100px;
    font-size: 12px;
    padding: 10px 15px;
    border-radius: 4px;
  }`;
  document.querySelector('head').appendChild(headStyle);
};
const triggerModeHandler = () => triggerMode = !triggerMode;
const craeteHeader = (container) => {
  const header = document.createElement('h1');
  header.innerText = 'Приложение для поиска фильмов';
  container.append(header);
};
const setAttribute = (el, attrs) => {
  for (let key in attrs) el.setAttribute(key, attrs[key]);
};

const craeteSearchBox = (container) =>{
  const searchBox = document.createElement('div');
  const input = document.createElement('input');
  const labelForInput = document.createElement('label');
  const button = document.createElement('button');
  button.classList.add('search__btn');
  button.innerText = 'Найти';
  
  const checkbox = document.createElement('input');
  const labelForCheckbox = document.createElement('label');
  searchBox.setAttribute('class', 'search');

  setAttribute(input, {
    class: 'search__input',
    id: 'search',
    placeholder: 'Начните вводить текст...',
    type: 'text'
  });
  setAttribute(labelForInput, {
    class: 'search__label-input',
    for: 'search'
  });

  labelForInput.innerText = 'Поиск фильмов';


   setAttribute(checkbox, {
     class: 'search__checkbox',
     id: 'checkbox',
     type: 'checkbox'
   });
  checkbox.addEventListener('click', triggerModeHandler);
   setAttribute(labelForCheckbox, {
     class: 'search__lebel-checkbox',
     for: 'checkbox'
   });

   labelForCheckbox.innerText = 'Добавлять фильмы у уже существующему списку';
  searchBox.append(labelForInput, input, button, checkbox, labelForCheckbox);
  
  container.append(searchBox);

};



const createMarkUp = () => {
 const container = document.createElement('div');
 container.classList.add('container');

 craeteHeader(container);
 craeteSearchBox(container);
 
 const movies = document.createElement('div');
 movies.classList.add('movies');
 container.appendChild(movies);

 document.querySelector('body').prepend(container);
  movieList = document.querySelector('.movies');

 inputSearch = document.querySelector('#search');

};

const addMovieToList = (movie) => {
  const item = document.createElement('div');
  const img = document.createElement('img');

  img.src = movie.Poster;
  img.classList.add('movie__img');

  item.classList.add('movie');

  item.appendChild(img);
  movieList.appendChild(item);
  
};
const clearMoviesMarkup = () => movieList && (movieList.innerHTML = '');
 const delay = (() => {
    let timer = 0;
    return (calback, ms) => {
       clearTimeout(timer);
       timer = setTimeout(calback, ms);
    };
 })();

createMarkUp();
createStyle();


