import React, { Component } from "react";
import "./ListAvailableCharacter.css";

export default class ListAvailableCharacter extends Component {
  render() {
    let {name, selectCharacter, url} = this.props
    return (
      <div className="d-flex container-list-available mt-2">
        <div className="p-2">{name}</div>
        <div className="ml-auto p-2 bd-highlight">
          <button type="button" onClick={() => selectCharacter(url, name)}className="btn p-2 btn-outline-primary">
            Select
          </button>
        </div>
      </div>
    );
  }
}
