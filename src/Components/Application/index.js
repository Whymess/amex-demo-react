import React, { Component } from "react";
import "./Application.css";
import { SelectedCharacter, ListAvailableCharacter } from "../../Components/";
import data from "../../Data/index.json";
import { returnArray } from "../../Helpers/";

export default class Application extends Component {
  state = {
    endpoint: "",
    name: "",
    isLoaded: "",
    dataToShow: "",
    isError: ""
  };

  selectCharacter = (url, name) => {
    let endpoint = url.split("https://swapi.co/api/");
    this.setState(
      {
        endpoint: endpoint[1],
        currentSelectedName: name,
        isLoaded: false,
        dataToShow: "",
        isError: ""
      },
      () => {
        this.fetchInfoAboutCharacter();
      }
    );
  };

  fetchInfoAboutCharacter = () => {
    let { endpoint } = this.state;
    const baseURl = "https://swapi.co/api/";

    fetch(`${baseURl}${endpoint}`)
      .then(res => res.json())
      .then(res => {
        let { films } = res;
        this.fetchMoiveTitlesFromCharacters(films);
      })
      .catch(error => {
        this.setState({
          isError:
            "There was an error. Please try again or choose a different character"
        });
      });
  };

  fetchMoiveTitlesFromCharacters = films => {
    Promise.all(films.map(url => fetch(url)))
      .then(resp => Promise.all(resp.map(r => r.json())))
      .then(result => {
        this.setState({
          dataToShow: result,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isError:
            "There was an error. Please try again or choose a different character"
        });
      });
  };

  renderListOfPossbileChars = () => {
    let formattedData = returnArray(data);
    return formattedData.map((el, i) => {
      return (
        <ListAvailableCharacter
          selectCharacter={this.selectCharacter}
          key={i}
          {...el}
        />
      );
    });
  };

  render() {
    const { isError, isLoaded, dataToShow } = this.state;
    return (
      <div className="container-game mt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container-instructions mt-2">
                Instructons: Please select a character you want to learn more
                about.
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {this.renderListOfPossbileChars()}
          </div>
          <div className="row">
            <div className="container">
              <div className="row justify-content-center mt-2">
                {isError && isError.length > 0 ? (
                  <strong className="error-message"> {isError} </strong>
                ) : (
                  <SelectedCharacter
                    dataToShow={dataToShow}
                    isLoaded={isLoaded}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
