import React from "react";
import "./CardInfo.css";

export default props => {
  let { title, director, opening_crawl, release_date } = props;

  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  release_date = new Date(release_date);

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle">
          {director}, {release_date.toLocaleString("en-us", options)}
        </h6>
        <p className="card-text">{opening_crawl}</p>
      </div>
    </div>
  );
};
