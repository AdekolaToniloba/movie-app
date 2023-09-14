import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // API URL
  const API_URL = "https://api.themoviedb.org/3";

  // FETCH MOVIES FUNCTION
  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: import.meta.env.REACT_APP_MOVIE_API_KEY,
      },
    });

    console.log("data", data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Hello Youtube</h1>
    </>
  );
}

export default App;
