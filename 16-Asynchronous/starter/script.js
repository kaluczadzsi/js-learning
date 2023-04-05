'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//https://restcountries.com/v2/

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/hungary');
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);

  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1_000_000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.hun}</p>
      <p class="country__row"><span>💰
      </span>${data.currencies.HUF.symbol}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
