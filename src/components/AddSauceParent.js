import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSauce } from '../reducer/reducer';
import HomeChild from './HomeChild';
import AddSauceForm from './AddSauceForm';
import Menu from './Menu';

class AddSauceParent extends Component {
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
    // assuming list is always sorted
    let id = this.props.list[this.props.list.length - 1].id + 1;
    this.setState(
      {
        id
      },
      () => this.props.addSauce(this.state)
    );
    document.getElementsByClassName('sauce-input').value = '';
  };

  render() {
    const props = {
      onChange: this.onChange,
      onSubmit: this.onSubmit
    };

    if (this.props.list.length === 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <Fragment>
          <Menu form="true" />
          <div className="form-container container">
            <AddSauceForm {...props} />
            <ul className="preview">
              <HomeChild data={this.state} />
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
)(AddSauceParent);
