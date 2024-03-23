import { getMovieVideos } from "../../services/movies";
import { MovieProps } from "./MovieType";

export default async function MovieVideos({ id }: MovieProps) {
  const videos = await getMovieVideos({ id });
  return (
    <section>
      <h2>Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.name}</li>
        ))}
      </ul>
    </section>
  );
}
