import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function OtherView({title, value, setValue, maxValue, minValue}) {

  const [intervalId, setIntervalId] = useState(0);

  function subChangeValue() {
    setValue(value > (minValue || 1) ? --value : 1);
  }

  function addChangeValue() {
    setValue(value < (maxValue || 300) ? ++value : value);
  }

  function onLongClick(isAdd) {
    let id = setInterval(isAdd ? addChangeValue : subChangeValue, 100);;
    setIntervalId(id);
  }

  function finishInterval() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  return (
    <View style={styles.subGenderView}>
      <Text style={styles.commonText}>{title}</Text>

      <Text style={styles.boldText}>{value}</Text>

      <View style={styles.addOrSubParentView}>
        <TouchableOpacity 
          style={styles.addOrSubTouch} 
          onPress={subChangeValue} 
          onLongPress={() => onLongClick(false)} 
          onPressOut={finishInterval}>
          <Text style={styles.addOrSubText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addOrSubTouch} 
          onPress={addChangeValue} 
          onLongPress={() => onLongClick(true)} 
          onPressOut={finishInterval}>
          <Text style={styles.addOrSubText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subGenderView: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: '#333244',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  commonText: {
    color: '#707483',
    fontSize: 16,
  },

  boldText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 6,
  },

  addOrSubParentView: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },

  addOrSubTouch: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#5d6270',
  },

  addOrSubText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
