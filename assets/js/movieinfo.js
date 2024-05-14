const cl = console.log;

// single data id 
const getMovieInfo =async()=>{
    let currentUrl = new URL(window.location.href)
    let queryParams = new URLSearchParams(currentUrl.search);
    const MOVIE_ID = queryParams.get("movieid");
    const SINGLE_MOVIE_URL= `${BASE_URL}/movie/${MOVIE_ID}?api_key=${API_KEY}`;

    let res = await makeApicall(SINGLE_MOVIE_URL,"GET")
    cl(res)
}
getMovieInfo()