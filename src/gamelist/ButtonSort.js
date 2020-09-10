import React from "react";

class ButtonSort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mr-2">
        <button
          className="btn btn-secondary btn-lg mr-1 ml-1"
          onClick={this.props.sortReset}
        >
          reset
        </button>
        <button
          className="btn btn-secondary btn-lg mr-1 ml-1"
          onClick={this.props.sortGameToNewDate}
        >
          sort by new years
        </button>
        <button
          className="btn btn-secondary btn-lg mr-1 ml-1"
          onClick={this.props.sortGameToOldDate}
        >
          sort by old years
        </button>

        <button
          className="btn btn-secondary btn-lg mr-1 ml-1"
          onClick={this.props.sortGameAlphabetically}
        >
          sort by Alphabetically
        </button>
        <button
          className="btn btn-secondary btn-lg mr-1 ml-1"
          onClick={this.props.sortGameLowPrice}
        >
          sort by low price
        </button>
        <button
          className="btn btn-secondary btn-lg mr-1 ml-1"
          onClick={this.props.sortGameHighPrice}
        >
          sort by high price
        </button>
      </div>
    );
  }
}

export default ButtonSort;
