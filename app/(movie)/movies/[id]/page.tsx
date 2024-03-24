import { Metadata } from "next";
import MovieDetailComponent from "../../../../components/MovieDetail";
import { getMovie } from "../../../../services/movies";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
  searchParams: {};
}
export async function generateMetadata({
  params: { id },
}: MovieDetailPageProps): Promise<Metadata> {
  const movieInfo = await getMovie({ id });
  return {
    title: movieInfo.title,
  };
}
export default async function MovieDetailPage({
  params: { id },
}: MovieDetailPageProps) {
  return <MovieDetailComponent id={id} />;
}
