import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PersonItem from '@/PersonItem';
import { updateContact } from '@actions';
import styles from './styles.css';


function PersonList(props) {
  return (
    <div>
      {props.isLoaded
      ? (
        <div>
          <li className={styles.container}>
            <p className={styles.title}>First name</p>
            <p className={styles.title}>Last name</p>
            <p className={styles.title}>Color</p>
            <p className={styles.title}>Image</p>
            <p className={styles.title}>Location</p>
            <p className={styles.title}>Team</p>
            <p className={styles.title}>Title</p>
            <p className={styles.title}>Actions</p>
          </li>
          {props.data.map(contact =>
            (<PersonItem key={contact.id} {...contact} updateContact={props.updateContact} />))}
        </div>
      )
      : <p>Still loading...</p>}
    </div>
  );
}

PersonList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoaded: PropTypes.bool.isRequired,
  updateContact: PropTypes.func.isRequired,
};

PersonList.defaultProps = {
  data: [],
};

export default connect(state => ({
  data: state.contacts,
  isLoaded: state.isLoaded,
}), {
  updateContact,
})(PersonList);
