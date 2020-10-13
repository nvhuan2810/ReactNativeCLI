import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function OtherView({title, value = 60, setValue}) {

  function subChangeValue() {
    setValue(value > 0 ? --value : 0);
  }

  function addChangeValue() {
    setValue(value < 1000 ? ++value : value);
  }

  return (
    <View style={styles.subGenderView}>
      <Text style={styles.commonText}>{title}</Text>

      <Text style={styles.boldText}>{value}</Text>

      <View style={styles.addOrSubParentView}>
        <TouchableOpacity style={styles.addOrSubTouch} onPress={subChangeValue}>
          <Text style={styles.addOrSubText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addOrSubTouch} onPress={addChangeValue}>
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
