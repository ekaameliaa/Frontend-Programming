import Hero from "../../components/Hero/Hero";
import Form from "../../components/AddMovieForm/AddMovieForm";


function CreateMovie({ movies, setMovies}){
    return(
        <div>
            <Hero />
            <Form movies={movies} setMovies={setMovies} />
        </div>
        
    )
}

export default CreateMovie;