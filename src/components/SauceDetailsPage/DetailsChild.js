import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function DetailsChild(props) {
  return (
    <Fragment>
      <div className="left">
        <div className="details-text-container">
          <i className="fas fa-angle-left" />
          <Link to={'/'}>back to hot sauce list</Link>
          <h2>{props.selected.title}</h2>
        </div>
        <div className="details-img-container">
          <img
            className="details-img"
            src={props.selected.imageURL}
            alt={`Picture of ${props.selected.title}`}
          />
        </div>
      </div>
      <div className="right">
        <p>{props.selected.description}</p>
      </div>
    </Fragment>
  );
}
