// Box.js
// Defines a reusable styled Box component that displays its children inside a container.


import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,  // Ensure children prop is provided
};