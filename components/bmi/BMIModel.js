import React from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonCommon from './ButtonCommon';
import Foundation from 'react-native-vector-icons/Foundation';
import {FEMALE_COLOR, MALE, MALE_COLOR, MALE_IMAGE, FEMALE_IMAGE} from './GenderSelection';
import { AGE_DEFAULT, GENDER_DEFAULT, HEIGHT_DEFAULT, WEIGHT_DEFAULT } from './BMICalculator';

const WARNING_COLOR = '#fb413a';
const NORMAL_COLOR = '#00FF00';

export default function BMIModel({
  gender,
  setGender,
  height,
  setHeight,
  weight,
  setWeight,
  age,
  setAge,
  modalVisible,
  setModalVisible,
}) {
  const bmi = weight / Math.pow(height / 100.0, 2);

  function closeModel() {
    setGender(GENDER_DEFAULT);
    setHeight(HEIGHT_DEFAULT);
    setWeight(WEIGHT_DEFAULT);
    setAge(AGE_DEFAULT);
    setModalVisible(!modalVisible);
  }

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleHeader}>YOUR RESULT</Text>

        <View style={styles.contentView}>
          <View style={styles.topContentView}>
            <View style={styles.genderTopContentView}>
              <Text style={styles.genderText}>Gender: </Text>
              <Foundation
                name={gender === MALE ? MALE_IMAGE : FEMALE_IMAGE}
                size={20}
                color={gender === MALE ? MALE_COLOR : FEMALE_COLOR}
              />
            </View>
            <Text style={[styles.concludeText, {color: (bmi < 18.5 || bmi >= 25) ? WARNING_COLOR : NORMAL_COLOR}]}>
              {bmi < 18.5 ? 'UNDERWEIGHT' : bmi >= 25 ? 'OVERWEIGHT' : 'NORMAL'}
            </Text>
          </View>

          <Text style={styles.centerContentText}>{bmi.toFixed(2)}</Text>

          <View style={styles.bottomContentView}>
            <View style={styles.bottomTopContentView}>
              <Text style={styles.bottomContentText}>
                Height: {height || 0}
              </Text>
              <Text style={styles.bottomContentText}>
                Weight: {weight || 0}
              </Text>
              <Text style={styles.bottomContentText}>Age: {age || 0}</Text>
            </View>
            <Text style={styles.commentText}>
              {bmi < 18.5
                ? 'You are underweighted.\nEat more!'
                : bmi >= 25
                ? 'You are overweighted.\nEat less!'
                : 'You have a normal body weight.\nGood job!'}
            </Text>
          </View>
        </View>

        <ButtonCommon title="RE-CALCULTE" onClick={closeModel} />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212639',
    opacity: 1,
  },
  titleHeader: {
    width: '100%',
    marginTop: 15,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentView: {
    flex: 1,
    backgroundColor: '#3c2c46',
    borderRadius: 8,
    marginTop: 60,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  topContentView: {
    marginTop: 40,
    alignItems: 'center',
  },

  genderTopContentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  genderText: {
    color: '#fff',
    fontSize: 15,
  },
  concludeText: {
    color: '#fb413a',
    fontSize: 25,
    fontWeight: 'bold',
  },
  centerContentText: {
    color: '#fff',
    fontSize: 70,
    fontWeight: 'bold',
  },
  bottomContentView: {
    marginBottom: 40,
    alignItems: 'center',
  },
  bottomTopContentView: {
    marginStart: 20,
    marginEnd: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContentText: {
    flex: 1 / 3,
    color: '#d8d643',
    fontSize: 16,
    textAlign: 'center',
  },
  commentText: {
    marginTop: 3,
    marginStart: 20,
    marginEnd: 20,
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
