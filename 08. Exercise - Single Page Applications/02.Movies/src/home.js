import { detailsPage } from "./detail.js";
import { showView, spinner } from "./util.js";

const section = document.querySelector('#home-page');
const catalog = section.querySelector('#movie .card-deck.d-flex.justify-content-center');
catalog.addEventListener('click', (event)=> {
  if(event.target.tagName == 'BUTTON') {
    event.preventDefault();
    const id = event.target.dataset.id;
    detailsPage(id);
  }
})

export function homePage() {
    showView(section);
    displayMovies();
}

async function displayMovies() {
    catalog.replaceChildren(spinner());
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
}

function createMoviePreview(movie){
    const element = document.createElement('div');
    element.className = 'card-mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
            alt="Card image cap" width="400">
    <div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
    <a href="/details/${movie._id}">
      <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
    </a>
    </div>`;
    
    return element
}

async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();

    return data
}


window.getMovies = getMovies;

/*
              <div class="card m-b4">
                <img class="card-img-top"
                  src="https://cdn.europosters.eu/image/750/plastic-frame-wonder-woman-1984-psychedelic-transcendence-i94225.jpg"
                  alt="Card image cap" width="400">
                <div class="card-body">
                  <h4 class="card-title">Wonder Woman 1984</h4>
                </div>
                <div class="card-footer">
                  <a href="#">
                    <button type="button" class="btn btn-info">Details</button>
                  </a>
                </div>
              </div>
*/ 