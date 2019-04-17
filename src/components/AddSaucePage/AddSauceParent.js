import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSauce, successOn } from '../../reducer/reducer';
import HomeChild from '../HomePage/HomeChild';
import AddSauceForm from './AddSauceForm';
import Menu from '../Menu';

class AddSauceParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: 111,
        title: 'title',
        subtitle: 'subtitle',
        imageURL: 'https://picsum.photos/200/200',
        description: 'description'
      }
    };
  }
  onChange = e => {
    let key = e.target.id;
    let value = event.target.value;
    let obj = { [key]: value };
    this.setState({
      details: { ...this.state.details, ...obj }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // assuming list is always sorted
    let id;
    if (this.props.list.length === 0) {
      id = 0;
    } else {
      id = this.props.list[this.props.list.length - 1].id + 1;
    }
    let newId = {
      id
    };
    this.setState(
      {
        details: { ...this.state.details, ...newId }
      },
      () => this.props.addSauce(this.state.details)
    );
    document.getElementById('title').value = '';
    document.getElementById('subtitle').value = '';
    document.getElementById('imageURL').value = '';
    document.getElementById('description').value = '';
    this.props.successOn();
  };

  render() {
    const props = {
      onChange: this.onChange,
      onSubmit: this.onSubmit
    };

    if (this.props.initLoad) {
      return <Redirect to="/" />;
    } else {
      return (
        <Fragment>
          <Menu form="true" />
          <div className="form-container container">
            <AddSauceForm {...props} />
            <ul className="preview">
              {this.props.success ? (
                <p className="successMsg">Success! Go "Home" to see your addition</p>
              ) : null}
              <HomeChild data={this.state.details} preview={true} />
            </ul>
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  list: state.list,
  success: state.success,
  initLoad: state.initLoad
});

const mapDispatchToProps = dispatch => ({
  addSauce: payload => dispatch(addSauce(payload)),
  successOn: () => dispatch(successOn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSauceParent);
