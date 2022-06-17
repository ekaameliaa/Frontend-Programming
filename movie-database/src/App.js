import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/Movie/Create";
import Detail from "./pages/Movie/Detail";
import NowPlaying from "./pages/Movie/NowPlaying";
import PopularMovie from "./pages/Movie/Popular";
import TopRatedMovie from "./pages/Movie/TopRated";
import data from "./utils/constants/data";
import theme from "./utils/constants/theme";

function App(){
  //lifting state movies ke app
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies} />}></Route>
          <Route path="/movie/popular" element={<PopularMovie />}></Route>
          <Route path="/movie/now" element={<NowPlaying />}></Route>
          <Route path="/movie/top" element={<TopRatedMovie />}></Route>
          /** routinf buat detail */
          <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
      </Layout>
      </ThemeProvider>
     
    </div>
  );
}



export default App;
