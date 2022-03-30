import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

export default function Home({ data }) {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);
  const ranking = [
    {
      icon: fa1,
      badge:
        "absolute z-10 -inset-7 aspect-square p-2 border border-yellow-300 rounded-full text-5xl bg-yellow-300 text-yellow-500",
      poster:
        "relative aspect-[2/3] w-full cursor-pointer border-2 border-solid border-yellow-300 shadow-[0px_0px_6px_4px] shadow-yellow-300",
    },
    {
      icon: fa2,
      badge:
        "absolute z-10 -inset-7 aspect-square p-2 border border-gray-200 rounded-full text-5xl bg-gray-200 text-gray-400",
      poster:
        "relative aspect-[2/3] w-full cursor-pointer border-2 border-solid border-gray-200 shadow-[0px_0px_6px_4px] shadow-gray-200",
    },
    {
      icon: fa3,
      badge:
        "absolute z-10 -inset-7 aspect-square p-2 border border-yellow-600 rounded-full text-5xl bg-yellow-600 text-yellow-800",
      poster:
        "relative aspect-[2/3] w-full cursor-pointer border-2 border-solid border-yellow-600 shadow-[0px_0px_6px_4px] shadow-yellow-600",
    },
  ];

  useEffect(() => {
    if (movies.length === 0) {
      setMovies(data.results);
    } else {
      const trend = async () => {
        const response = await fetch(`/api/movies/trend/${page}`);
        return response.json();
      };
      trend().then((res) => setMovies((prev) => prev.concat(res.results)));
    }
  }, [page]);

  return (
    <>
      <SEO title="Home" />
      <div className="container mx-auto my-14 px-14 grid gap-x-14 grid-cols-3">
        {movies &&
          movies.map((movie, idx) => {
            if (idx < 3) {
              return (
                <div key={movie.id} className={ranking[idx].poster}>
                  <FontAwesomeIcon
                    icon={ranking[idx].icon}
                    className={ranking[idx].badge}
                  />
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    placeholder="blur"
                    blurDataURL
                    alt={`${movie.original_title}`}
                    layout="fill"
                    onClick={() =>
                      router.push(`/movies/${movie.original_title}/${movie.id}`)
                    }
                  />
                </div>
              );
            }
          })}
      </div>
      <div className="container mx-auto px-14 grid gap-x-8 gap-y-16 grid-cols-3 md:grid-cols-4">
        {movies &&
          movies.map((movie, idx) => {
            if (idx >= 3) {
              return (
                <div
                  key={movie.id}
                  className="relative aspect-[2/3] w-full cursor-pointer"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    placeholder="blur"
                    blurDataURL
                    alt={`${movie.original_title}`}
                    layout="fill"
                    onClick={() =>
                      router.push(`/movies/${movie.original_title}/${movie.id}`)
                    }
                  />
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/movies/trend/1`);
  const data = await response.json();
  return { props: { data } };
}
