import React, { Component, Fragment } from 'react';
import HomeGridItem from './HomeGridItem';
import { loadSauces, deleteSauce } from '../reducer/reducer';
import { connect } from 'react-redux';

import data from '../data/hotsauces.json';

class HomeGrid extends Component {
  componentDidMount() {
    this.props.loadSauces(data.list);
  }

  deleteSauce = e => {
    this.props.deleteSauce(e.target.id);
  };

  render() {
    // contain props here to spread onto iterable item for clean structure and readability
    const props = {
      deleteSauce: this.deleteSauce
    };

    return (
      <Fragment>
        <h1>Hot Sauce List</h1>
        <ul className="grid container">
          {this.props.list.map(ele => {
            return <HomeGridItem key={ele.id} data={ele} {...props} />;
          })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  loadSauces: payload => dispatch(loadSauces(payload)),
  deleteSauce: payload => dispatch(deleteSauce(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeGrid);
