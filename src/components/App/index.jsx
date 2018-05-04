import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { getContacts } from '@actions';
import PersonList from '@/PersonList';
import PersonInfo from '@/PersonInfo';
import styles from './styles.css';
import './main.css';


class App extends Component {
  static propTypes = {
    getContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={PersonList} />
            <Route path="/:id" component={PersonInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, {
  getContacts,
})(App);
