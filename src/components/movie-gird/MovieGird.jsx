import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

import MovieCard from "../moviecard/MovieCard";
import "./movie-gird.scss";

const MovieGird = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPage, settotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let data = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            // code block
            data = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            break;
          default:
            // code block
            data = await tmdbApi.getMoviesList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        data = await tmdbApi.search(props.category, { params });
        setItems(data.resufts);
        settotalPage(data.totalPages);
      }
      getList();
    };
  }, [props.category, keyword]);

  return (
    <div className="movie-gird">
        {
            items.map((item,i)=>(
                <MovieCard category={props.category} item={item} key={i}></MovieCard>
            ))
        }
    </div>
  );
};

export default MovieGird;
