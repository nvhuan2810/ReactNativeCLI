import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ButtonCommon({title, onClick, onLongClick}) {
  return (
    <TouchableOpacity style={styles.calculatorTouch} onPress={onClick} onLongPress={onLongClick}>
      <Text style={styles.calculatorText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  calculatorTouch: {
    height: 54,
    backgroundColor: '#fe2263',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  calculatorText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
