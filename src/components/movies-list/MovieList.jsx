import React from 'react';

import { useState ,useEffect } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';

import { PropTypes } from "prop-types";

import './movie-list.scss'


// Import Swiper styles
import 'swiper/css';
import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../moviecard/MovieCard';

const MovieList = props => {

const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let res = null;

            const params = {};

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                      res = await tmdbApi.getMoviesList(props.type, {params});
                      break;
                    default:
                      res = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
              res = await tmdbApi.similar(props.category, props.id);
            }
            setItems(res.results);
        }
        getList();
    }, []);

  return (
    
    <div className='movie-list'>
      <Swiper 
               grabCursor={true}
               spaceBetween={10}
               slidesPerView={'auto'}
              >
                {
                  items.map((item, i) => (
                    <SwiperSlide key={i}>
                          <MovieCard item={item} category={props.category}/>
                     </SwiperSlide>
                  ))
                }
      </Swiper>
    </div>
  );
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MovieList;
