import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.list.map(x => {
          return <Movie name={x.name} img={x.img} rank={x.rank} />;
        })}

        <div onClick={() => this.props.show()} className="movie">
          <h1 className="add">+</h1>
        </div>
      </div>
    );
  }
}

export default MovieList;
