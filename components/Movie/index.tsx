import { Suspense } from "react";
import MovieInfo from "./MovieInfo";
import MovieVideos from "./MovieVideos";
import { MovieProps } from "./MovieType";

export default function MovieDetailComponent({ id }: MovieProps) {
  return (
    <>
      <Suspense fallback={<h1>INfo Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Video Loading...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
