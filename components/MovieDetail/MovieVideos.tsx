import { getMovieVideos } from "../../services/movies";
import { MovieProps } from "./MovieType";
import styles from "../../styles/MovieVideo.module.css";

export default async function MovieVideos({ id }: MovieProps) {
  const videos = await getMovieVideos({ id });
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
