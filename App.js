import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image,  Text, View } from 'react-native';
import Constants from 'expo-constants';
import { AppBar } from '@react-native-material/core';

export default function App() {
  const [items, setItems] = useState([
    {id: 1, name: 'Test1'},
    {id:2,name: 'Test2'}
  ])

  useEffect(() => {
    const tempItems = [] //taulukon lyhyt määrittely
    for (let i =1;i<41;i++) {
      tempItems.push({id: i,name: `Test ${i}`, image: 'https://reactnative.dev/img/tiny_logo.png'})
    }
    setItems(tempItems)
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#ccc'/>
      <AppBar title='My list' backgroundColor='#999' tintColor='cyan'/>
     <ScrollView>
      {
        items.map((item) => (
          <View key={item.id} style={styles.rowContainer}>
            <Image
              source = {{ 
                uri: item.image,
                width: 32,
                height: 32,
              }}
            />
          
        <Text style={styles.rowText}>{item.name}</Text>
        </View>
      ))
      }
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
  rowContainer: {
    
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  rowText: {
    fontSize: 20,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 10,
    color: 'blue',
    
  }
});
