import styles from "../../styles/MovieInfo.module.css";

import { getMovie } from "../../services/movies";
import { MovieProps } from "./MovieType";

const MovieInfo = async ({ id }: MovieProps) => {
  const movieInfo = await getMovie({ id });

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movieInfo.poster_path}
        alt={movieInfo.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movieInfo.title}</h1>
        <h1> ⭐️ {movieInfo.vote_average.toFixed(2)}</h1>
        <p>{movieInfo.overview}</p>
        <a href={movieInfo.homepage} target="_blank" rel="noreferrer">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
