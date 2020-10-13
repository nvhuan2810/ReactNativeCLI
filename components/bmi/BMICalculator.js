import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import BMIModel from './BMIModel';
import BodyBMI from './BodyBMI';
import ButtonCommon from './ButtonCommon';
import {MALE} from './GenderSelection';

export const GENDER_DEFAULT = MALE;
export const HEIGHT_DEFAULT = 150;
export const WEIGHT_DEFAULT = 60;
export const AGE_DEFAULT = 20;

export function BMICalculator() {
  const [gender, setGender] = useState(GENDER_DEFAULT);

  const [height, setHeight] = useState(HEIGHT_DEFAULT);

  const [weight, setWeight] = useState(WEIGHT_DEFAULT);

  const [age, setAge] = useState(AGE_DEFAULT);

  const [modalVisible, setModalVisible] = useState(false);

  function onCalculator() {
    setModalVisible(true);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <BMIModel
          gender={gender}
          height={height}
          weight={weight}
          age={age}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

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
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2633',
  },

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
