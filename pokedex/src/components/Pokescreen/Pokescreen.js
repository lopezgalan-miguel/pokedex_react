import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pokescreen.module.scss';

const Pokescreen = () => (
  <div className={styles.Pokescreen} data-testid="Pokescreen">
    Pokescreen Component
  </div>
);

Pokescreen.propTypes = {};

Pokescreen.defaultProps = {};

export default Pokescreen;
