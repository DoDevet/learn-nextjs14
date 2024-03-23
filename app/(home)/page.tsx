import { Metadata } from "next";
import Link from "next/link";
import { getMovies } from "../../services/movies";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <section>
      <ul>
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <h1>{movie.title}</h1>
          </Link>
        ))}
      </ul>
    </section>
  );
}
