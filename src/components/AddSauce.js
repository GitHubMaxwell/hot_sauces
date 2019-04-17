import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSauce } from '../reducer/reducer';

import HomeGridItem from './HomeGridItem';
import Menu from './Menu';

class AddSauce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 100,
      title: 'title',
      subtitle: 'subtitle',
      imageURL: 'https://picsum.photos/200/200',
      description: 'description'
    };
  }
  onChange = e => {
    let key = e.target.id;
    let value = event.target.value;
    this.setState({
      [key]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // assuming list is always initially sorted
    let id = this.props.list[this.props.list.length - 1].id + 1;
    this.setState(
      {
        id
      },
      () => this.props.addSauce(this.state)
    );

    // clear inputs
    document.getElementsByClassName('sauce-input').value = '';
  };

  render() {
    if (this.props.list.length === 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <Fragment>
          <Menu form="true" />
          <div className="form-container container">
            <form className="form container">
              <label>Add Hot Sauce Details</label>
              <input
                className="sauce-input"
                id="title"
                type="text"
                placeholder="Title"
                onChange={this.onChange}
              />
              <input
                className="sauce-input"
                id="subtitle"
                type="text"
                placeholder="Subtitle"
                onChange={this.onChange}
              />
              <input
                className="sauce-input"
                id="imageURL"
                type="text"
                placeholder="Image URL"
                onChange={this.onChange}
              />
              <textarea
                id="description"
                type="text"
                placeholder="Description"
                onChange={this.onChange}
              />
              <button type="submit" onClick={this.onSubmit}>
                Submit
              </button>
            </form>
            <ul className="preview">
              <HomeGridItem data={this.state} />
            </ul>
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  addSauce: payload => dispatch(addSauce(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSauce);
