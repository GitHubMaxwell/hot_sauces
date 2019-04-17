import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sauceDetails } from '../../reducer/reducer';
import { Redirect } from 'react-router-dom';
import DetailsChild from './DetailsChild';

class DetailsParent extends Component {
  componentWillMount() {
    let {
      match: { params }
    } = this.props;
    this.props.sauceDetails(params.id);
  }

  render() {
    if (this.props.list.length === 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="details container">
          <DetailsChild selected={this.props.selected} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  list: state.list,
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  sauceDetails: payload => dispatch(sauceDetails(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsParent);
