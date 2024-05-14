const trendingMovies =document.getElementById("trendingMovies");


const insertMainSliderItems =(arrOfMovies)=>{
    trendingMovies.innerHTML=arrOfMovies.map(movie=>{
        return`
        <div class="item">
        <figure class="mb-0 movieCard">
            <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}" alt="">
            <figcaption>
                <h3 class="display-3">
                    ${movie.original_title || movie.title || movie.name}
                </h3>
                <em class="my-4">
                   <strong>${movie.id}</strong>
                    ${movie.overview}
                </em>
                <p>
                    <button  data-id="${movie.id}"
                     onclick="loadQParams(this)"
                    class="btn btn-large btn-red" >View More</button>
                </p>
            </figcaption>
        </figure>
    </div>
            `
    })
    .join("")
    }

const initSlider=()=>{
	$('#trendingMovies').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
}



const fetchTrendingMovies=async()=>{
    let res = await makeApicall(TRENDING_URL,"GET")
    insertMainSliderItems(res.results)
    initSlider()

}
fetchTrendingMovies()

const loadQParams =(ele)=>{
     cl(ele)
     let id= ele.getAttribute("data-id");
     cl(id)

     let currentUrl= new URL(window.location.href);
     cl(currentUrl)

     let queryParams= new URLSearchParams(currentUrl.search);
     cl(queryParams);

     queryParams.set("movieid",id);
     currentUrl.search = queryParams.toString()

     let movieRedirecUrl =`${currentUrl.origin}/movieinfo.html${currentUrl.search}`;
     cl(movieRedirecUrl)

     window.location.href = movieRedirecUrl;    
}   