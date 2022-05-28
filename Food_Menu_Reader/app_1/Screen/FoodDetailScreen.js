import {View, Text, Button} from 'react-native';
import React from 'react';

const FoodDetailScreen = () => {
  return (
    <View>
      <Text>Food Name: XXXXXXX</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default FoodDetailScreen;
