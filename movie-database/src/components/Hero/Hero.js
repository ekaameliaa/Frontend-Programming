import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import Button from "../UI/Button";
import StyledHero from "./styled.hero";


function Hero() {
  //state movie
  const [  movie, setMovie ] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  
  useEffect(getDetailMovie, [])

  //mendapatkan 1 data dari trending movies
  async function getTrendingMovies(){
    const response = await axios(ENDPOINTS.HERO);
    return response.data.results[Math.floor(Math.random() * 20)];
  }

  async function getDetailMovie(){
    //ambil id dari trending movie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    //fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data)

  }

  return (
    <StyledHero>
      <div>
      <section>
        <div>
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a" href={trailer} target={"_blank"} variant="secondary" size="lg">Watch</Button>
        </div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title}/>
        </div>
      </section>
      </div>
    </StyledHero>
  );
}

export default Hero;