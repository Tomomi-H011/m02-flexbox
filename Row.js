// Row.js
// Defines a reusable styled Row component that displays its children inside a container.


import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default function Row({ children }) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,  // Ensure children prop is provided
};