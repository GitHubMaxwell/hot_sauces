import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeGridItem(props) {
  return (
    <li className="grid-item">
      <i
        id={props.data.id}
        className="fas fa-times-circle grid-item-delete"
        onClick={props.deleteSauce}
      />
      <Link to={`details/${props.data.id}`}>
        <div className="grid-item-img-container">
          <img
            className="grid-item-img"
            src={props.data.imageURL}
            alt={`Picture of ${props.data.title}`}
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
