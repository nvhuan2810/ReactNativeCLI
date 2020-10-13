import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PaperLeftImage from '../../images/ic_paper_left.png';
import PaperRightImage from '../../images/ic_paper_right.png';
import RockLeftImage from '../../images/ic_rock_left.png';
import RockRightImage from '../../images/ic_rock_right.png';
import ScissorsLeftImage from '../../images/ic_scissors_left.png';
import ScissorsRightImage from '../../images/ic_scissors_right.png';

export default function RockPaperScissor() {
  const ROCK = 0;
  const PAPER = 1;
  const SCISSORS = 2;

  const DRAW = 'DRAW';
  const WIN = 'WIN';
  const LOSS = 'LOSS';

  const [result, setResult] = useState(DRAW);
  const [youValue, setYouValue] = useState(RockRightImage);
  const [computerValue, setComputerValue] = useState(RockLeftImage);

  function changeYouValue(value) {
    let comValue = Math.floor(Math.random() * 3);
    var content = DRAW;
    if (value === ROCK && comValue === PAPER) {
      content = LOSS;
    } else if (value === ROCK && comValue === SCISSORS) {
      content = WIN;
    } else if (value === PAPER && comValue === ROCK) {
      content = WIN;
    } else if (value === PAPER && comValue === SCISSORS) {
      content = LOSS;
    } else if (value === SCISSORS && comValue === ROCK) {
      content = LOSS;
    } else if (value === SCISSORS && comValue === PAPER) {
      content = WIN;
    }
    setResult(content);
    setYouValue(
      value === ROCK
        ? RockRightImage
        : value === PAPER
        ? PaperRightImage
        : ScissorsRightImage,
    );
    setComputerValue(
      comValue === ROCK
        ? RockLeftImage
        : comValue === PAPER
        ? PaperLeftImage
        : ScissorsLeftImage,
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        <View style={styles.centerView}>
          <View style={styles.centerItemView}>
            <Image source={youValue} style={styles.centerItemImage} />
            <Text style={styles.centerItemText}>You</Text>
          </View>
          <View style={styles.centerItemView}>
            <Image source={computerValue} style={styles.centerItemImage} />
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

  topView: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultText: {
    color: '#000000',
    fontSize: 70,
    fontWeight: 'bold',
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

  centerItemImage: {
    width: 70,
    height: 70,
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
