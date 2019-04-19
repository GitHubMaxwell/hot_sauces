import React from 'react';

export default function Toast(props) {
  if (props.message === 'success') {
    return (
      <p className={`toast flex-container success`}>
        Success! You have added your custom sauce to the Home page
      </p>
    );
  } else if (props.message === 'failed') {
    return (
      <p className={`toast flex-container failed`}>
        Submission Failed! You must enter data for all fields
      </p>
    );
  } else {
    return null;
  }
}
