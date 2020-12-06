const getData = (url) => fetch(url)
  .then((response) => response.json())
  .then((json) => {
    if (json.Search) return json.Search;
    throw Error('Сервер вернул неправильный объект');
  });

search_button = document.querySelector('.search__btn');

search_button.addEventListener('click', (findBtnClickHandler) );

function findBtnClickHandler () {
  delay(() => {
    const search_text = document.querySelector('.search__input');
    const text = search_text.value;
  
    if (inputSearchTextBoxIsValid(text)) {
      getData(`https://www.omdbapi.com/?s=${text}&apikey=18b8609f`)
        .then(movies => movies.forEach(movie => addMovieToList(movie)))
        .catch(err => textBoxShowErrorMessage());
    } else { textBoxShowErrorMessage(); }

  }, 1000);
  
};

function inputSearchTextBoxIsValid(text) {
  if (text && text.length >= 4) {
    if (!triggerMode) clearMoviesMarkup();
    
    return true;
  }
  else {
    return false;
  }
};

function textBoxShowErrorMessage() {
  createSearchInputStyle();
  createTooltip();
  createTooltipStyle();
  closeBtn();
};

function createSearchInputStyle() {
  const inputStyle = document.createElement('style');
  inputStyle.innerHTML =
    `.search_input__error {
      border: 2px solid #ff0000;
      box-shadow: #ff0000 2px 2px 3px 3px;
    }`;
  document.querySelector('head').appendChild(inputStyle);
  document.querySelector('.search__input').classList.add("search_input__error");
};

function createTooltip() {
  const tooltip = document.createElement('div');
  tooltip.setAttribute('class', 'tooltip');
  tooltip.setAttribute('data-tooltip', 'Текст подсказки');
  tooltip.innerHTML = 'Введите правильное название фильма  <button class="close">Закрыть окно</button>';
  document.querySelector('.container').appendChild(tooltip);
};

function createTooltipStyle() {
  const itooltipStyle = document.createElement('style');
  itooltipStyle.innerHTML = `
  .tooltip {
    width: 300px;
    height: 85px;
    text-align: center;
    padding: 15px;
    border: 3px solid #ff0000;  
    border-radius: 10px;
    color: #000000;
    font-size: 14px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto; 
  }
  .tooltip:target {
    display: block;
  }
  .close {
    display: inline-block;
    border: 1px solid #cccccc;
    color: #000000;
    box-shadow: #ff0000 2px 2px 3px 3px;
    padding: 0 12px;
    font-size: 16px;
    margin: 10px;
    text-decoration: none;
    background: #f2f2f2;
    cursor:pointer;
  }
  .close:hover { 
    background: #e6e6ff; 
  }`;
  document.querySelector('head').appendChild(itooltipStyle);
};

function closeBtn() {
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', closeBtnClickHandler);
};

function closeBtnClickHandler() {
  delay(() => {
    document.querySelector('.tooltip').remove();
  document.querySelector('.search_input__error')
    .classList.remove('search_input__error');

  }, 1000); 
};

