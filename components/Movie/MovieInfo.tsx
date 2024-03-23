import { getMovie } from "../../services/movies";
import { MovieProps } from "./MovieType";

const MovieInfo = async ({ id }: MovieProps) => {
  const movieInfo = await getMovie({ id });
  return (
    <section>
      <h1>{movieInfo.title}</h1>
      <img
        src={movieInfo.backdrop_path}
        alt="Movie"
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
    </section>
  );
};

export default MovieInfo;
