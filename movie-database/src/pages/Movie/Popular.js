import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie(){
    const [movies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        //fetch dari data axios
        getPopularMovies(); 
    }, []);

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR);
        dispatch(updateMovies(response.data.results));
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} title={"Popular Movies"}/>
        </div>
        
    )
}

export default PopularMovie;