import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function DetailsChild(props) {
  return (
    <Fragment>
      <div className="details-left">
        <div className="details-text-container flex-container">
          <Link to={'/'}>
            <i className="fas fa-angle-left" />
            back to hot sauce list
          </Link>
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
      <div className="details-right">
        <p>{props.selected.description}</p>
      </div>
    </Fragment>
  );
}
