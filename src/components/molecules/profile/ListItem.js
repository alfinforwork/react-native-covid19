import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ListItem({
  onPress,
  icon,
  title,
  radiusTop,
  radiusBottom,
}) {
  return (
    <View style={{position: 'relative'}}>
      <FontAwesome5
        name="chevron-right"
        color={'#808b96'}
        size={16}
        style={{position: 'absolute', top: 10, right: 20, zIndex: 1}}
      />
      <TouchableHighlight
        underlayColor="#abb2b9"
        onPress={() => onPress || Alert.alert('Hello world')}
        style={[
          {
            backgroundColor: '#eaecee',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          },
          radiusTop ? style.radiusTop : {},
          radiusBottom ? style.radiusBottom : {},
        ]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome5
            name={icon || 'angle-double-right'}
            color={'#566573'}
            size={16}
            style={{marginRight: 10}}
          />
          <Text>{title || 'Nama'}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
const style = StyleSheet.create({
  radiusTop: {
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  radiusBottom: {
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
});
