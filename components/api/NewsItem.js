import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {formatDistance} from 'date-fns';

export function NewsItem({item}) {
  const openUrl = async ({url}) => {
      console.log(url);
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(`Do not know how to open this URL: ${url}`);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => openUrl(item)}>
      <View style={styles.mainView}>
        <Image
          style={styles.newsImage}
          source={{uri: item.urlToImage}}
          resizeMode="center"
        />
        <View style={styles.contentView}>
          <Text style={styles.contentText} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.timeText}>
            {formatDistance(new Date(item.publishedAt), new Date())}
          </Text>
        </View>
      </View>
      <View style={styles.lineView} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginStart: 15,
    marginEnd: 15,
  },
  mainView: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
  },
  newsImage: {
    width: 150,
    height: '100%',
  },
  contentView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 3,
    marginStart: 12,
  },
  contentText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  timeText: {
    color: '#000000',
    fontSize: 13,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  lineView: {
    width: '100%',
    height: 1,
    marginTop: 15,
    backgroundColor: '#DDDDDD',
  },
});
