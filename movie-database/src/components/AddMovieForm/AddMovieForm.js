import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../../features/movieSlice';
import Alert from '../Alert/Alert';
import Button from '../UI/Button';
import styles from './AddMovieForm.module.css'

function Form(){

    const navigation = useNavigate();
    const dispatch = useDispatch();

    /** membuat state berdasarkan object */
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        film: ""
    })

    function handleChange(e){

        /** destructing nama dan value */
        const { name, value } = e.target;

        /**
         * Mengupdate state berupa object:
         * - Menggunakan spread operator:
         * - Update property berdasarkan apapun nilai name.
         */

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    /** dustructing title, date, poster, film */

    const { title, date, poster, film } = formData;

    /** membuat state erorr berdasarkan object */
    const [ erorr, setErorr ] = useState({
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
        isFilmError: false,
    })

    /** dusetructing isTitleError, isDateError, isPosterError, isFilmError */

    const { isTitleError, isDateError, isPosterError, isFilmError } = erorr;
    
    function validate(){
        if (title === ""){
            setErorr({...erorr, isTitleError: true});
            return false;
        }

        else if(date === ""){
            setErorr({...erorr, isDateError: true});
            return false;
        }

        else if(poster === ""){
            setErorr({...erorr, isPosterError: true});
            return false;
        }

        else if(film === ""){
            setErorr({...erorr, isFilmError: true});
            return false;
        }

        else{
            setErorr({...erorr, 
            isTitleError: false,
            isDateError: false,
            isPosterError: false,
            isFilmError: false, })
            return true;
        }

    }

    function submitMovie(){
        const movie = {
            id: nanoid(), title: title,
            year: date, 
            type: film,
            poster: poster
        }

        dispatch(addMovie(movie));
        navigation("/");
    }

    function handleSubmit(e) {
        e.preventDefault();

        validate() && submitMovie();

    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                <img
                    className={styles.form__image}
                    src="https://picsum.photos/536/354"
                    alt="placeholder"/>
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__text}>Add Movie</h1>
                    {/* kasih event on submit */}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__title}>
                            <label htmlFor="title" className={styles.form__label}>Title</label> <br />
                            <input type="text" className={styles.form__input} id="title" value={title} onChange={handleChange} name="title" />
                            {isTitleError && <Alert>Title Wajib diisi</Alert>}
                        </div>
                        <div>
                            <label htmlFor="date" className={styles.form__label}>Date</label><br />
                            <input 
                            type="number" 
                            className={styles.form__input} 
                            id="date"
                             value={date} 
                            onChange={handleChange}
                            name="date" />
                            {isDateError && <Alert>Date wajib diisi</Alert>}                        
                        </div>
                        <div>
                            <label htmlFor="Url"className={styles.form__label}>Url Poster</label> <br />
                            <input type="text" className={styles.form__url} value={poster} onChange={handleChange} name="poster"  />
                            {isPosterError && <Alert>link poster wajib diisi</Alert>}
                            <select value={film} className={styles.form__select} onChange={handleChange} name="film">
                                <option value="Action">Genre Film</option>
                                <option value="Drama">Drama</option>
                                <option value="Horor">Horor</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Romance">Romance</option>
                            </select>
                            {isFilmError && <Alert className={styles.alert}>genre wajib pilih</Alert>}
                        </div>
                        <Button full>Submit</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form;