import React, { useState } from "react";
import { sculptureList } from "./dataLab1";

export class Gallery extends React.Component {
  //   index = 0;
  state = { index: 0, show: true };
  handleClickNext = () => {
    let i = this.state.index + 1;
    // Check if the next index is within the bounds of the array
    if (i < sculptureList.length) {
      this.setState({ index: i });
    } else {
      // If the next index is out of bounds, loop back to the beginning
      this.setState({ index: 0 });
    }
  };

  handleClickBack = () => {
    let i = this.state.index - 1;
    // Check if the previous index is within the bounds of the array
    if (i >= 0) {
      this.setState({ index: i });
    } else {
      // If the previous index is out of bounds, loop to the end
      this.setState({ index: sculptureList.length - 1 });
    }
  };

  handleClickShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    // const sculpture = sculptureList[this.index];
    const sculpture = sculptureList[this.state.index];
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="card">
                <img
                  src={sculpture.url}
                  class="card-img-top"
                  alt="{sculpture.alt}"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {sculpture.name} <br /> {sculpture.artist}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={this.handleClickShow}
                  >
                    {this.state.show ? "Hide" : "Show"} Detail
                  </button>
                  {this.state.show && (
                    <p class="card-text">{sculpture.description}</p>
                  )}
                  <div className="card-footer mt-2 text-end">
                    <button
                      className="btn btn-outline-warning me-3"
                      onClick={this.handleClickBack}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-outline-info"
                      onClick={this.handleClickNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </>
    );
  }
}
