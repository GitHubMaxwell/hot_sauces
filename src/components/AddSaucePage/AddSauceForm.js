import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddSauceForm extends Component {
  constructor(props) {
    super(props);
  }

  formValueChange = e => {
    let key = e.target.id;
    let value = this.refs[key].value;
    let formChange = { [key]: value };
    this.props.onChange(formChange);
  };
  resetValues = () => {
    this.refs.title.value = '';
    this.refs.subtitle.value = '';
    this.refs.imageURL.value = '';
    this.refs.description.value = '';
  };

  render() {
    if (this.props.success) {
      this.resetValues();
    }
    if (this.props)
      return (
        <div className="form-container flex-container">
          <h2>Add Hot Sauce Details</h2>
          <form className="form flex-container" onChange={this.formValueChange}>
            <input
              className="sauce-input"
              id="title"
              maxLength="15"
              placeholder="Title"
              ref="title"
              type="text"
            />
            <input
              className="sauce-input"
              id="subtitle"
              maxLength="108"
              placeholder="Subtitle"
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
            <textarea id="description" placeholder="Description" ref="description" type="text" />
            <button type="submit" onClick={this.props.onSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  success: state.success
});

export default connect(mapStateToProps)(AddSauceForm);
