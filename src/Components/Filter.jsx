import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [1, 2, 3, 4, 5],
      rank: 3
    };
  }

  render() {
    return (
      <div className="filter">
        <div className="search-form">
          <input
            onChange={e => this.props.change(e.target.value)}
            type="text"
            placeholder="Type the movie name to search"
            className="search"
          />
          <button onClick={() => this.props.search()} className="btn-search">
            Search
          </button>
        </div>
        <div className="rank-form">
          <span className="label-rank">Minimum ranking</span>
          <div className="stars">
            {this.state.stars.map((x, i) => {
              if (i < this.props.rank) {
                return (
                  <Star
                    click={this.props.updateStars}
                    id={i + 1}
                    className="star star-color"
                  />
                );
              }
              return (
                <Star
                  click={this.props.updateStars}
                  id={i + 1}
                  className="star"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;

export class Star extends Component {
  constructor() {
    super();
  }
  render(props) {
    return (
      <span
        onClick={e => {
          this.props.click(e.target.id);
        }}
        className={this.props.className}
        id={this.props.id}
      >
        ★
      </span>
    );
  }
}
