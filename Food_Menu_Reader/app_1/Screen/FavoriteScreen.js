import { View, Text,FlatList,StyleSheet } from 'react-native'
import React from 'react'

const FavoriteScreen = () => {
  return (
    <View>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      marginTop: 32,
      textAlign: 'center',
      fontSize: 24,
    },
    item: {
            padding: 10,
            fontSize: 18,
      
    }
    
  });

export default FavoriteScreen