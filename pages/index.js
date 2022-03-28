import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ popular }) {
  const router = useRouter();
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   const popular = async () => {
  //     const response = await fetch(`/api/movies`);
  //     return response.json();
  //   };
  //   popular().then((res) => setMovies(res.results));
  // }, []);
  // console.log(movies);
  return (
    <>
      <SEO title="Home" />
      {popular ? (
        popular.map((movie) => {
          return (
            <div key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`${movie.original_title}`}
                width={500}
                height={500}
                onClick={() =>
                  router.push(`/movies/${movie.original_title}/${movie.id}`)
                }
              />
              <div>{movie.original_title}</div>;
            </div>
          );
        })
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const popular = await fetch(`http://localhost:3000/api/movies`)
    .then((res) => res.json())
    .then((res) => res.results);
  return {
    props: {
      popular,
    },
  };
}
