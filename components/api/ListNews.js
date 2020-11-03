import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { NewsItem } from './NewsItem';

export default function ListNews() {

  const [isLoading, setLoading] = useState(true); 
  const [articles, setArticles] = useState([]); 
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoadMore, setLoadMore] = useState(false); 

  const getListNews = async () => {
    setLoading(true);
    const response = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news,cbc-news,nbc-news,fox-news,mtv-news=&pageSize=20&apiKey=4e382803377547209998a2eb4f2dafb8&page="+pageIndex);
    const jsonData = await response.json();
    if (isLoadMore) {
      setArticles(preActicles => preActicles.concat(jsonData.articles));
    } else {
      setArticles(jsonData.articles);
    }
    setLoading(false);
  };

  function refresh() {
    setLoadMore(false);
    setPageIndex(1);
  }

  function loadMore() {
    setLoadMore(true);
    setPageIndex(prePageIndex => ++prePageIndex);
  }
  
  useEffect(() => {
    getListNews(false);
  }, [pageIndex]);

  const renderItem = ({ item }) => {
    return (
      <NewsItem item={item}/>
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>

        <View style={styles.headerView}>
          <Text style={styles.titleText}>WORLDWIDE NEWS</Text>
        </View>

        <View style={styles.titleLine} />

        <FlatList
          style={styles.container} 
          data={articles} 
          renderItem={renderItem}
          keyExtractor={renderItem => renderItem.urlToImage}
          onRefresh={refresh}
          refreshing={isLoading}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3} />

      </SafeAreaView> 
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#000000" />
        </View> 
      ) : (<></>)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#f34849',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDEDED',
  },
  center: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  }
});
