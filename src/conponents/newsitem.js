// this is a conponent of newsitem and it will be used in news conponent

import React from "react";

const Newsitem = (props) => {
  let { title, desc, img, uniqueurl, author, time } = props;

  return (
    <div>
      <span
        className="badge rounded-pill bg-danger"
        style={{ position: "absolute", right: "8px", top: "-6px" }}
      >
        {props.source}
      </span>
      <img
        src={img ? img : "https://source.unsplash.com/nature"}
        alt="images will be  here"
      />
      <h2>{title}</h2>
      <p>
        {desc == null
          ? "there is no description available please click on click here button to see news"
          : desc}
      </p>
      <p className="card-text">
        <small className="text-muted">
          by {author == null ? "unknown" : author} on{" "}
          {new Date(time).toLocaleString()}{" "}
        </small>
      </p>
      <a
        href={uniqueurl}
        rel="noreferrer"
        target="_blank"
        className="btn btn-dark btn-sm "
      >
        Click here
      </a>
    </div>
  );
};

export default Newsitem;
