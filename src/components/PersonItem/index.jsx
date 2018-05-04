/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.css';


class PersonItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updateContact: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.setState({
      id: this.props.id,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      color: this.props.color,
      image: this.props.image,
      location: this.props.location,
      team: this.props.team,
      title: this.props.title,
      updateContact: this.props.updateContact,
    });
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }
  render() {
    return (
      <li className={styles.container}>
        <input type="text" className={styles.input} name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <input type="text" className={styles.input} name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <input type="text" className={styles.input} name="color" value={this.state.color} onChange={this.handleChange} />
        <input type="text" className={styles.input} name="image" value={this.state.image} onChange={this.handleChange} />
        <input type="text" className={styles.input} name="location" value={this.state.location} onChange={this.handleChange} />
        <input type="text" className={styles.input} name="team" value={this.state.team} onChange={this.handleChange} />
        <input type="text" className={styles.input} name="title" value={this.state.title} onChange={this.handleChange} />
        <div className={styles.input}>
          <button
            className={styles.link}
            onClick={() => this.props.updateContact(this.state)}
          >
            Save
          </button>
          <Link
            className={styles.link}
            to={`/${this.props.id}`}
          >
            Open
          </Link>
        </div>
      </li>
    );
  }
}

export default PersonItem;
