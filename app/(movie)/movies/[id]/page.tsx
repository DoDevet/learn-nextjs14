import MovieDetailComponent from "../../../../components/Movie";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
  searchParams: {};
}

export default async function MovieDetailPage({
  params: { id },
}: MovieDetailPageProps) {
  return <MovieDetailComponent id={id} />;
}
