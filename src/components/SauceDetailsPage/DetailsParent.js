import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sauceDetails } from '../../redux/actions/action_creators';
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
    if (this.props.initLoad) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="details flex-container">
          <DetailsChild selected={this.props.selected} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  list: state.list,
  selected: state.selected,
  initLoad: state.initLoad
});

const mapDispatchToProps = dispatch => ({
  sauceDetails: payload => dispatch(sauceDetails(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsParent);
