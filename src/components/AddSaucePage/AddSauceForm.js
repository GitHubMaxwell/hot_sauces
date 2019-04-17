import React from 'react';

export default function AddSauceForm(props) {
  return (
    <form className="form container">
      <label>Add Hot Sauce Details</label>
      <input
        maxlength="15"
        className="sauce-input"
        id="title"
        type="text"
        placeholder="Title"
        onChange={props.onChange}
      />
      <input
        maxlength="108"
        className="sauce-input"
        id="subtitle"
        type="text"
        placeholder="Subtitle"
        onChange={props.onChange}
      />
      <input
        className="sauce-input"
        id="imageURL"
        type="text"
        placeholder="Image URL"
        onChange={props.onChange}
      />
      <textarea id="description" type="text" placeholder="Description" onChange={props.onChange} />
      <button type="submit" onClick={props.onSubmit}>
        Submit
      </button>
    </form>
  );
}
