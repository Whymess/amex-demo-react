import React from "react";
import "./SelectedCharacter.css";
import { LoadingSpinner, CardInfo } from "../../Components/";

export default props => {
  let { isLoaded, dataToShow } = props;

  return (
    <div className="container">
      {isLoaded === false ? (
        <LoadingSpinner />
      ) : (
        dataToShow &&
        dataToShow.map((el, i) => {
          return <CardInfo key={i} {...el} />;
        })
      )}
    </div>
  );
};
