import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BMIModel from './BMIModel';
import BodyBMI from './BodyBMI';
import ButtonCommon from './ButtonCommon';
import {MALE} from './GenderSelection';

export function BMICalculator() {
  const [gender, setGender] = useState(MALE);

  const [height, setHeight] = useState(150);

  const [weight, setWeight] = useState(60);

  const [age, setAge] = useState(20);

  const [modalVisible, setModalVisible] = useState(false);

  function onCalculator() {
    setModalVisible(true);
  }

  return (
    <>
      <BMIModel gender={gender} height={height} weight={weight} age={age} modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <View style={styles.header}>
        <Text style={styles.titleHeader}>BMI CALCULATOR</Text>
      </View>

      <View style={styles.titleLine} />

      <BodyBMI
        style={styles.bodyView}
        gender={gender}
        setGender={setGender}
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        age={age}
        setAge={setAge}
      />

      <ButtonCommon title="CALCULATE" onClick={onCalculator} />
    </>
  );
}

const styles = StyleSheet.create({

  header: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'normal',
  },
  titleLine: {
    width: '100%',
    height: 5,
    backgroundColor: '#131a2b',
  },

  bodyView: {
    flex: 1,
  },
});
