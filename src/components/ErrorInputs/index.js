
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default function ErrorInputs(props) {
  return (
    <View>
        <Text style={styles.reportErro}>
          {props.text}
        </Text>
    </View>
  );
}