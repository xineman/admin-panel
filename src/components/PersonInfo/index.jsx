/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getOneContact } from '@actions';
// import styles from './styles.css';

class PersonInfo extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string,
      location: PropTypes.string,
      team: PropTypes.string,
      title: PropTypes.string,
    }),
    getOneContact: PropTypes.func.isRequired,
    match: PropTypes.shape().isRequired,
  }
  static defaultProps = {
    contact: null,
  }
  componentDidMount() {
    if (!this.props.contact) {
      this.props.getOneContact(this.props.match.params.id);
    }
  }
  render() {
    const { contact } = this.props;
    return (
      <div>
        {contact ?
          (
            <div>
              <Link to="/">Back</Link>
              <p>First name: {contact.firstName}</p>
              <p>Last name: {contact.lastName}</p>
              <p>Color: {contact.color}</p>
              <p>Image: <img src={contact.image} alt="" /></p>
              <p>Location: {contact.location}</p>
              <p>Team: {contact.team}</p>
              <p>Title: {contact.title}</p>
            </div>
          ) :
            <div>Still loading</div>
        }
      </div>
    );
  }
}

export default connect((state, ownProps) => ({
  contact: state.contacts.find(c => c.id === ownProps.match.params.id),
  isLoaded: state.isLoaded,
}), {
  getOneContact,
})(PersonInfo);
