import React,{useEffect} from 'react';

import { useParams } from "react-router-dom";

import PageHeader from '../page-header/PageHeader';

import { category as cate } from '../../api/tmdbApi';
import MovieGird from '../movie-gird/MovieGird';


const Catalog = () => {
  const {categoryParam} = useParams();
  console.log(categoryParam);
 
  return (
    <div>
      <PageHeader>
        {
          categoryParam === cate.movie ? 'Movie': 'Tv Series'
        }
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGird category={categoryParam}/>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
