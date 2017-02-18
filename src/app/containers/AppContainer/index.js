import React, { PropTypes, Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import App from '../../components/App';

@connect(null, { pushState: push })
export default class AppContainer extends Component {
  static propTypes = {
    pushState: PropTypes.any
  };

  render() {
    const f = () => {
      console.log(this.props.pushState);
      this.props.pushState('/foo');
    };

    return (<App onClick={() => f()} {...this.props} />);
  }
}
