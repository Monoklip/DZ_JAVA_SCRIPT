
const input = document.querySelector('input');

const btn = document.querySelector('.seachBtn').addEventListener('click', getData);

async function getData() {

    const movies = document.querySelector('.movies');
    movies.textContent = ``;

    for(let i = 2022; i > 1950; i--){

        const url = new URL(`https://www.omdbapi.com/?apikey=17953867&t=${input.value}&y=${i}`);

        try {
            const response = await fetch(url);
            const data = await response.json();
    
            if(data.Response == 'True'){
    
                const div = document.querySelector('.movies');
    
                const films = document.createElement('div');
                films.className = `films`;
                div.appendChild(films);
    
                const image = document.createElement('div');
                image.className = `image`;
                image.style.backgroundImage = `url('${data.Poster}')`;
                films.appendChild(image);
    
                const nameMovie = document.createElement('div');
                nameMovie.className = `nameMovie`;
                nameMovie.textContent = data.Title;
                films.appendChild(nameMovie);
    
                const typeMovie = document.createElement('div');
                typeMovie.className = `typeMovie`;
                typeMovie.textContent = data.Type;
                films.appendChild(typeMovie)
    
                const yearMovie = document.createElement('div');
                yearMovie.className = `yearMovie`;
                yearMovie.textContent = data.Year;
                films.appendChild(yearMovie);
    
                const btnMovieDetails = document.createElement('button');
                btnMovieDetails.className = `btnMovieDetails`;
                btnMovieDetails.textContent = `More details`;
                films.appendChild(btnMovieDetails);
    
                btnMovieDetails.addEventListener('click', ()=>{
    
                    div.style.display = `none`;
                    document.body.style.background = `grey`;
    
                    const movieInfo = document.querySelector('.movieInfo');
                    movieInfo.style.display = `block`;
    
                    const infoImage = document.querySelector('.infoImage');
                    infoImage.style.backgroundImage = `url('${data.Poster}')`;
                    infoImage.style.backgroundSize = `cover`;
    
                    const infoTextTitle = document.querySelector('.infoText-title');
                    infoTextTitle.textContent = data.Title;
    
                    const Rated = document.querySelector('.Rated');
                    Rated.textContent = `${data.Rated}, ${data.Year}, ${data.Genre}`;
    
                    const Plot = document.querySelector('.Plot');
                    Plot.textContent = data.Plot;
    
                    const Writer = document.querySelector('.Writer');
                    Writer.innerHTML = `<b style="color:black">Writen by:</b> ${data.Writer}`;
    
                    const Director = document.querySelector('.Director');
                    Director.innerHTML = `<b style="color:black">Directed by:</b> ${data.Director}`;
    
                    const Actors = document.querySelector('.Actors');
                    Actors.innerHTML = `<b style="color:black">Starring:</b> ${data.Actors}`;
    
                    const BoxOffice = document.querySelector('.BoxOffice');
                    BoxOffice.innerHTML = `<b style="color:black">BoxOffice:</b> ${data.BoxOffice}`;
    
                    const Awards = document.querySelector('.Awards');
                    Awards.innerHTML = `<b style="color:black">Awards:</b> ${data.Awards}`;
    
                    const Ratings = document.querySelector('.Ratings');
                    Ratings.innerHTML += `<b style="color:black">Ratings:</b>`;
    
                    const rank = document.querySelectorAll('.rank');
    
                    for(let j = 0; j < data.Ratings.length; j++){
                        rank[j].textContent = `${data.Ratings[j].Source} ${data.Ratings[j].Value}`;
                    };
    
                    movieInfo.addEventListener('click', ()=>{
                        document.body.style.background = `white`;
                        movieInfo.style.display = `none`;
                        div.style.display = `block`;
                    })
                });
            }  
        }
        catch (e) {
            console.log(e);
        }
    }
}
