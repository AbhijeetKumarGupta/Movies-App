import React, { PureComponent } from "react";

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      poster: props.poster,
      title: props.title,
      hover: false,
    };
  }

  render() {
    return (
      <div
        onMouseEnter={(e) => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className="moviePosterContainer"
      >
        <img src={this.state.poster} alt="" />
        {this.state.hover ? <span>{this.state.title}</span> : ""}
      </div>
    );
  }
}

export default Card;
