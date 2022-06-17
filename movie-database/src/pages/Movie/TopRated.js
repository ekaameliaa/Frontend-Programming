import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie(){
    const [movies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        //memanggil funagsi getTopRatedMovie
        getTopRatedMovie();
        
    }, [])

    //membuat fungsi getTopRtaedMovie
    async function getTopRatedMovie(){
        const response = await axios(ENDPOINTS.TOPRATED);
        dispatch(updateMovies(response.data.results));
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} title={"Top Rated Movies"} />
        </div>
        
    )
}

export default TopRatedMovie;