import React, { Component, Fragment } from 'react';

export default class AddSauceForm extends Component {
  constructor(props) {
    super(props);
  }

  formValueChange = e => {
    let key = e.target.id;
    let value = this.refs[key].value;
    let formChange = { [key]: value };
    this.props.onChange(formChange);
  };

  render() {
    return (
      <div className="form-container flex-container">
        <h2>Add Hot Sauce Details</h2>
        <form className="form flex-container" onChange={this.formValueChange}>
          <input
            className="sauce-input"
            id="title"
            maxLength="15"
            placeholder={this.props.data.title}
            ref="title"
            type="text"
          />
          <input
            className="sauce-input"
            id="subtitle"
            maxLength="108"
            placeholder={this.props.data.subtitle}
            ref="subtitle"
            type="text"
          />
          <input
            className="sauce-input"
            id="imageURL"
            placeholder="Image URL"
            ref="imageURL"
            type="text"
          />
          <textarea
            id="description"
            placeholder={this.props.data.description}
            ref="description"
            type="text"
          />
          <button type="submit" onClick={this.props.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
