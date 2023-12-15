const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=48b7fd8eddafbd865f8799c3047acbc2';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=9828ffcfd5d1ba3ad9b2754164a91e49&language=en-US&page=1&include_adult=false';
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  showMovies(respData.results);
}

function showMovies(movies) {
  main.innerHTML = ""; // Clear existing content

  movies?.forEach((movie) => {
    const { poster_path, title, overview, vote_average } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("card_bg");

    movieEl.innerHTML = `
      <div class="card-container">
        <img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="card_details">
          <h3 class="p1">${title}</h3>
          <span class="bg-heading">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview: ${overview}</h3>
        </div>
      </div>
    `;

    main.appendChild(movieEl);
  });
}

getMovies(APIURL);
