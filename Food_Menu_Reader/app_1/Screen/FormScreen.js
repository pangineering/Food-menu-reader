import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProcessScreen from './ProcessScreen';
import MenuScreen from './MenuScreen';
import {NavigationContainer} from '@react-navigation/native';
const FormStack = ({navigation}) => {
  const [image, setImage] = useState();
  const [cuisine, setCuisine] = useState();
  const [source, setSource] = useState();
  const [target, setTarget] = useState();

  const [formValues, setFormValue] = useState({
    image: '',
    cuisine: '',
    src_lang: '',
    trg_lang: '',
  });
  const [response, setResponse] = useState();

  return (
    <View style={{padding: 10}}>
      <View>
        <Text style={styles.title2}>Upload Image</Text>
        <View style={{display: 'flex', width: '100%'}}>
          <TouchableOpacity
            style={styles.pickBtn}
            onPress={() => {
              launchImageLibrary(
                {
                  selectionLimit: 1,
                  mediaType: 'photo',
                  includeBase64: false,
                },
                setResponse,
              );
              //console.log(response)
              if (response) {
                setImage(response.assets[0].uri);
              }
              console.log(image);
            }}>
            <Text>Pick</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} disabled>
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.title2}>Cuisine</Text>
        <RNPickerSelect
          onValueChange={value => setCuisine(value)}
          items={[
            {label: 'Thai', value: 'thai'},
            {label: 'Chinese', value: 'chinese'},
            {label: 'Japanese', value: 'japanese'},
            {label: 'Korean', value: 'korea'},
            {label: 'Italian', value: 'italian'},
          ]}
        />
      </View>
      <View>
        <Text style={styles.title2}>Source Language</Text>
        <RNPickerSelect
          onValueChange={value => setSource(value)}
          items={[
            {label: 'Thai', value: 'thai'},
            {label: 'Chinese', value: 'chinese'},
            {label: 'Japanese', value: 'japanese'},
            {label: 'Korean', value: 'korea'},
            {label: 'Italian', value: 'italian'},
          ]}
        />
      </View>
      <View>
        <Text style={styles.title2}>Target Language</Text>
        <RNPickerSelect
          onValueChange={value => setTarget(value)}
          items={[
            {label: 'Thai', value: 'thai'},
            {label: 'Chinese', value: 'chinese'},
            {label: 'Japanese', value: 'japanese'},
            {label: 'Korean', value: 'korea'},
            {label: 'Italian', value: 'italian'},
          ]}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFormValue({
              image: image,
              cuisine: cuisine,
              src_lang: source,
              trg_lang: target,
            });

            console.log(formValues);
          }}>
          <Text>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate('Process', formValues);
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function FormScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={FormStack} />
        <Stack.Screen name="Process" component={ProcessScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: 24,
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
  nextBtn: {
    alignItems: 'center',
    backgroundColor: '#FF00F7',
    padding: 10,
    marginTop: 15,
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
});

export default FormScreen;
