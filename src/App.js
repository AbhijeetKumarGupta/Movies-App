import React, { PureComponent } from "react";
import Card from "./Components/Card";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moviesUrl: "https://www.omdbapi.com/?apikey=45f0782a&s=war",
      movies: [],
    };
  }

  componentDidMount() {
    fetch(this.state.moviesUrl)
      .then((res) => res.json())
      .then((result) => this.setState({ movies: result["Search"] }));
  }

  render() {
    return (
      <div>
        <fieldset className="moviesContainer">
          <legend>Movies</legend>
          {this.state.movies.map(({ Poster, Title }, index) => (
            <Card poster={Poster} title={Title} key={index} />
          ))}
        </fieldset>
      </div>
    );
  }
}

export default App;
