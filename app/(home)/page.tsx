import { Metadata } from "next";
import { getMovies } from "../../services/movies";
import styles from "../../styles/home.module.css";
import Movie from "../../components/Movie";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
