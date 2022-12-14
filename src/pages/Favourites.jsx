import React from "react";
import { category } from "../api/tmdbApi";
import PageHeader from "../components/page-header/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

const Favourites = () => {
  return (
    <div>
      <PageHeader>
        <h1>My Favourites</h1>
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
