import React, { Component } from "react";
import Filter from "./Components/Filter";
import "./App.css";
import MovieList from "./Components/MovieList";
import Add from "./Components/Add";
class App extends Component {
  constructor() {
    super();
    this.state = {
      minRank: 0,
      searchVal: "",
      list: this.movieList,
      modal: false
    };
  }
  movieList = [
    {
      name: "the avangers 3",
      img:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
      rank: "***"
    },
    {
      name: "jumangi",
      img:
        "http://www.wheninmanila.com/wp-content/uploads/2018/01/movies-january-2018-4.jpg",
      rank: "**"
    },
    {
      name: "captin marvin",
      img:
        "http://www.arm-film.com/wp-content/uploads/2017/08/Captain-Marvel-2018-768x1088.jpg",
      rank: "***"
    },
    {
      name: "tomb raider",
      img:
        "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/ALICIA-VIKANDER-1224758.jpg",
      rank: "*****"
    },
    {
      name: "rambo",
      img:
        "https://4.bp.blogspot.com/-NLzyFqdItYk/WSQkXFIBpVI/AAAAAAAANYs/bXZct_iP5q8UiXzIYkL0JO4upEoKoP4pQCLcB/s1600/rambo-tiger-shroff-upcoming-movie-poster-release-date-star-cast-Moviez-beat-2018.jpg",
      rank: "*****"
    },
    {
      name: "tomb raider",
      img:
        "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/ALICIA-VIKANDER-1224758.jpg",
      rank: "*****"
    }
  ];

  search = () => {
    this.setState(() => {
      return {
        list: this.movieList.filter(
          x =>
            x.name.startsWith(this.state.searchVal) &&
            x.rank.length >= this.state.minRank
        )
      };
    });
  };

  changeVal = val => {
    this.setState({
      searchVal: val
    });

    this.setState({
      list: this.movieList.filter(
        x => x.name.indexOf(val) !== -1 && x.rank.length >= this.state.minRank
      )
    });
  };

  rank = val => {
    this.setState({
      minRank: +val,
      list: this.movieList.filter(
        x =>
          x.name.indexOf(this.state.searchVal) !== -1 && x.rank.length >= +val
      )
    });
  };

  show = () => {
    this.setState({
      modal: true
    });
  };
  add = () => {
    if (
      this.movie.name !== "" &&
      this.movie.img !== "" &&
      this.movie.rank !== ""
    ) {
      this.setState({
        list: this.state.list.concat(this.movie)
      });
      this.movie = { name: "", img: "", rank: "" };
    }

    this.setState({
      modal: false
    });
  };

  hide = v => {
    v === "modal"
      ? this.setState({
          modal: false
        })
      : false;
  };
  movie = { name: "", img: "", rank: "" };

  inputChange = target => {
    switch (target.id) {
      case "name":
        this.movie.name = target.value;
        break;
      case "img":
        this.movie.img = target.value;
        break;
      case "rank":
        this.movie.rank = "".padEnd(target.value, "*");
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Filter
          search={this.search}
          change={this.changeVal}
          updateStars={this.rank}
          rank={this.state.minRank}
        />
        <MovieList list={this.state.list} show={this.show} />
        <Add
          hide={this.hide}
          className={this.state.modal ? "modal" : "modal hide"}
          add={this.add}
          inputChange={this.inputChange}
        />
      </div>
    );
  }
}

export default App;
