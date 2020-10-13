import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'; // loss
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RockPaperScissor() {
  const ROCK = 'hand-rock';
  const PAPER = 'hand-paper';
  const SCISSORS = 'hand-scissors';

  const DRAW = 'DRAW';
  const WIN = 'WIN';
  const LOSS = 'LOSS';

  const [result, setResult] = useState('DRAW');
  const [youValue, setYouValue] = useState(ROCK);
  const [computerValue, setComputerValue] = useState(ROCK);

  function changeYouValue(value) {
    var randomNumber = Math.floor(Math.random() * 3);
    var comValue = ROCK;
    if (randomNumber == 0) {
      comValue = ROCK;
    } else if (randomNumber == 1) {
      comValue = PAPER;
    } else {
      comValue = SCISSORS;
    }

    var r = DRAW;
    if (value === ROCK && comValue === PAPER) {
      r = LOSS;
    } else if (value === ROCK && comValue === SCISSORS) {
      r = WIN;
    } else if (value === PAPER && comValue === ROCK) {
      r = WIN;
    } else if (value === PAPER && comValue === SCISSORS) {
      r = LOSS;
    } else if (value === SCISSORS && comValue === ROCK) {
      r = LOSS;
    } else if (value === SCISSORS && comValue === PAPER) {
      r = WIN;
    }
    setResult(r);
    setYouValue(value);
    setComputerValue(comValue);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.resultText}>{result}</Text>

        <View style={styles.centerView}>
          <View style={styles.centerItemView}>
            <FontAwesome5 name={youValue} size={80} color="#fed674" />
            <Text style={styles.centerItemText}>You</Text>
          </View>
          <View style={styles.centerItemView}>
            <FontAwesome5 name={computerValue} size={80} color="#fed674" />
            <Text style={styles.centerItemText}>Computer</Text>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.bottomItemView}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => changeYouValue(ROCK)}>
              <FontAwesome name="hand-rock-o" size={40} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomItemView}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => changeYouValue(PAPER)}>
              <FontAwesome name="hand-paper-o" size={40} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomItemView}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => changeYouValue(SCISSORS)}>
              <FontAwesome name="hand-scissors-o" size={40} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 0,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultText: {
    flex: 1 / 3,
    marginTop: 100,
    color: '#000000',
    fontSize: 70,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerView: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerItemView: {
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerItemText: {
    color: '#000000',
    marginTop: 6,
    fontSize: 18,
  },

  bottomView: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomItemView: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    width: 70,
    height: 70,
    backgroundColor: '#fed674',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
