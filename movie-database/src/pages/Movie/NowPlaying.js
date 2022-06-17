import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying(){
    const [movies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlaying();
        
    }, [])

    async function getNowPlaying(){
        const response = await axios(ENDPOINTS.NOWPLAYING);
        dispatch(updateMovies(response.data.results))
    }
    return(
        <div>
           <Hero />
           <Movies movies={movies} title={"Now Playing Movies"}/>
        </div>
        
    )
}

export default NowPlaying;