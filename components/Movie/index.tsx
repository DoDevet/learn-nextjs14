import Link from "next/link";
import styles from "../../styles/movie.module.css";
interface MovieProps {
  id: number;
  posterPath: string;
  title: string;
}
const Movie = ({ id, posterPath, title }: MovieProps) => {
  return (
    <div className={styles.movie}>
      <Link href={`/movies/${id}`} key={id}>
        <img src={posterPath} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Movie;
