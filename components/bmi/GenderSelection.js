import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

export const MALE = 1;
export const FEMALE = 0;

export const MALE_COLOR = '#02d1db';
export const FEMALE_COLOR = '#fb413a';

export const MALE_IMAGE = 'male-symbol';
export const FEMALE_IMAGE = 'female-symbol';

export default function GenderSelection({type, gender, setGender}) {

  function onGenderChanged() {
    setGender(gender === type ? type : (gender === MALE ? FEMALE : MALE))
  }

  return (
    <>
      <TouchableOpacity
        style={[
          styles.subGenderView,
          {backgroundColor: gender === type ? '#21263b' : '#333244'},
        ]}
        onPress={onGenderChanged}>

        <Foundation
          name={type === MALE ? MALE_IMAGE : FEMALE_IMAGE}
          size={65}
          color={type === MALE ? MALE_COLOR : FEMALE_COLOR}
        />
        <Text style={styles.commonText}>{type === MALE ? "MALE" : "FEMALE"}</Text>
      </TouchableOpacity>
    </>
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
});
