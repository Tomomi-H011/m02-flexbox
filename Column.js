// Column.js
// Defines a reusable styled Column component that displays its children inside a container.


import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default function Column({ children }) {
  return (
    <View style={styles.column}>
        {children}
    </View>
  );
}

Column.propTypes = {
  children: PropTypes.node.isRequired,  // Ensure children prop is provided
};