import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSauce, successOn } from '../../redux/actions/action_creators';
import HomeChild from '../HomePage/HomeChild';
import AddSauceForm from './AddSauceForm';
import Menu from '../Menu/Menu';

class AddSauceParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: 111,
        title: 'Title',
        subtitle: 'Subtitle',
        imageURL: 'https://picsum.photos/200/200',
        description: 'Description'
      }
    };
  }
  onChange = obj => {
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
    this.setState(
      {
        details: { ...this.state.details, ...{ id } }
      },
      () => {
        this.props.addSauce(this.state.details);
        this.props.successOn();
        this.formReset();
      }
    );
  };

  formReset = () => {
    let details = {
      id: 111,
      title: 'Title',
      subtitle: 'Subtitle',
      imageURL: 'https://picsum.photos/200/200',
      description: 'Description'
    };
    this.setState({
      details: { ...this.state.details, ...details }
    });
  };

  render() {
    const props = {
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      data: this.state.details
    };

    if (this.props.initLoad) {
      return <Redirect to="/" />;
    } else {
      return (
        <Fragment>
          <Menu form="true" />
          <div className="form-wrapper flex-container">
            <AddSauceForm {...props} />
            <ul>
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
