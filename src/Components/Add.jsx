import React, { Component } from "react";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 0
    };
  }

  range = e => {
    this.props.inputChange(e);
    this.setState({ range: e.value });
  };

  render() {
    return (
      <div
        style={{ height: document.body.scrollHeight + "px" }}
        id="modal"
        onClick={e => this.props.hide(e.target.id)}
        className={this.props.className}
      >
        <div className="modal-body">
          <h2>add new movie</h2>
          <input
            onChange={e => this.props.inputChange(e.target)}
            id="name"
            type="text"
            placeholder="movie name"
            className="modal-inp"
          />
          <input
            onChange={e => this.props.inputChange(e.target)}
            id="img"
            type="text"
            placeholder="image link"
            className="modal-inp"
          />
          <b>
            Rank : <span>{this.state.range}</span>
          </b>
          <input
            value={this.state.range}
            onChange={e => this.range(e.target)}
            id="rank"
            step="1"
            min="0"
            max="5"
            type="range"
            class="modal-range"
          />
          <button onClick={() => this.props.add()} className="new">
            add
          </button>
        </div>
      </div>
    );
  }
}

export default Add;
