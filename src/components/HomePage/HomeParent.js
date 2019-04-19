import React, { Component, Fragment } from 'react';
import {
  loadSauces,
  deleteSauce,
  updateSauce,
  initLoad
} from '../../redux/actions/action_creators';
import { connect } from 'react-redux';
import HomeChild from './HomeChild';
import Menu from '../Menu/Menu';
import data from '../../data/hotsauces.json';

class HomeParent extends Component {
  componentDidMount() {
    if (this.props.initialLoad) {
      this.props.loadSauces(data.list);
      this.props.initLoad();
    } else {
      this.props.loadSauces(this.props.list);
    }
  }

  deleteSauce = e => {
    this.props.deleteSauce(e.target.id);
  };

  imageError = e => {
    this.props.updateSauce({ target: e.target.id, image: 'https://picsum.photos/300/220' });
    this.props.loadSauces(this.props.list);
  };

  render() {
    const props = {
      deleteSauce: this.deleteSauce,
      imageError: this.imageError
    };

    return (
      <Fragment>
        <Menu />
        <div className="home">
          <h1>Hot Sauce List</h1>
          <ul className="grid flex-container">
            {this.props.list.map(ele => {
              return <HomeChild key={ele.id} data={ele} {...props} />;
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  initialLoad: state.initLoad
});

const mapDispatchToProps = dispatch => ({
  loadSauces: payload => dispatch(loadSauces(payload)),
  deleteSauce: payload => dispatch(deleteSauce(payload)),
  updateSauce: payload => dispatch(updateSauce(payload)),
  initLoad: () => dispatch(initLoad())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeParent);
