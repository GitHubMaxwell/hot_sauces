import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeChild(props) {
  if (props.preview) {
    return (
      <div className="preview-box flex-container">
        <h2 className="preview-title">Preview</h2>
        <li className="preview-card">
          <div className="grid-item-img-container">
            <img
              id={props.data.id}
              className="grid-item-img"
              src={props.data.imageURL}
              alt={`Picture of ${props.data.title}`}
              onError={props.imageError}
            />
          </div>
          <div className="grid-item-text-container">
            <h2>{props.data.title}</h2>
            <p>{props.data.subtitle}</p>
          </div>
        </li>
      </div>
    );
  } else {
    return (
      <li className="grid-item">
        <div className="grid-item-delete-container flex-container">
          <i
            id={props.data.id}
            className="grid-item-delete fas fa-times"
            onClick={props.deleteSauce}
          />
        </div>
        <Link to={`details/${props.data.id}`}>
          <div className="overlay flex-container">
            <div className="overlay-text flex-container">
              <p>Details</p>
            </div>
            <div className="overlay-color" />
          </div>
          <div className="grid-item-img-container">
            <img
              id={props.data.id}
              className="grid-item-img"
              src={props.data.imageURL}
              alt={`Picture of ${props.data.title}`}
              onError={props.imageError}
            />
          </div>
          <div className="grid-item-text-container">
            <h2>{props.data.title}</h2>
            <p>{props.data.subtitle}</p>
          </div>
        </Link>
      </li>
    );
  }
}
