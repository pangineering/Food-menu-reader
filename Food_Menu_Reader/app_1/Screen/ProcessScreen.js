import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ProcessScreen = ({route, navigation}) => {
  const data = route.params;
  return (
    <View>
      <View style={{padding: 10}}>
        <View>
          <Text style={styles.title}>Data</Text>
          <Text>Cuisine: {data.cuisine}</Text>
          <Text>Source Language: {data.src_lang}</Text>
          <Text>Target Language: {data.trg_lang}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Process</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.title}>Output Result Summary</Text>
        <View>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              navigation.navigate('Menu');
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 18,
  },
  title2: {
    textAlign: 'left',
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2EFF00',
    padding: 10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
  },
  pickBtn: {
    alignItems: 'center',
    backgroundColor: '#33B8FF',
    padding: 10,
    margin: 5,
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: '#FF00F7',
    padding: 10,
    marginTop: 15,
  },
});

export default ProcessScreen;
