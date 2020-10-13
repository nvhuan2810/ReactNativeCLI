import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import GenderSelection, { FEMALE, MALE } from './GenderSelection';
import OtherView from './OtherView';

export default function BodyBMI({
  gender = MALE,
  setGender,
  height = 150,
  setHeight,
  weight = 60,
  setWeight,
  age = 20,
  setAge,
}) {

  function changeHeight(val) {
    setHeight(parseInt(val));
  }

  return (
    <>
      <View style={styles.genderView}>
        <GenderSelection type={MALE} gender={gender} setGender={setGender} />
        <GenderSelection type={FEMALE} gender={gender} setGender={setGender} />
      </View>
      <View style={styles.heightView}>
        <Text style={styles.commonText}>HEIGHT</Text>

        <View style={styles.subHeightText}>
          <Text style={styles.heightText}>{height}</Text>
          <Text style={styles.cmText}>cm</Text>
        </View>

        <Slider
          style={styles.slider}
          value={height}
          minimumValue={1}
          maximumValue={250}
          minimumTrackTintColor="#844b69"
          maximumTrackTintColor="#ffffff"
          onValueChange={(val) => changeHeight(val)}
        />
      </View>
      <View style={styles.otherView}>
        <OtherView title="WEIGHT" value={weight} setValue={setWeight} />
        <OtherView title="AGE" value={age} setValue={setAge} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  genderView: {
    flex: 1 / 3,
    marginTop: 15,
    marginStart: 5,
    marginEnd: 5,
    flexDirection: 'row',
  },

  commonText: {
    color: '#707483',
    fontSize: 16,
  },

  heightView: {
    flex: 1 / 3,
    marginTop: 15,
    marginStart: 15,
    marginEnd: 15,
    backgroundColor: '#333244',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subHeightText: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'flex-end',
  },

  heightText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  cmText: {
    color: '#fff',
    fontSize: 18,
    marginStart: 3,
    marginBottom: 3,
  },

  otherView: {
    flex: 1 / 3,
    flexDirection: 'row',
    marginTop: 15,
    marginStart: 5,
    marginEnd: 5,
  },

  slider: {
    width: '90%',
    height: 30,
    marginTop: 15,
  },
});
