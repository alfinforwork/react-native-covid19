import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  Alert,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {counterAction} from '../../config/redux/action';

function Intro({navigation, store, increment}) {
  return (
    <View style={style.root}>
      <View style={{flex: 5}}>
        <Text style={{color: 'white'}}>{store.value}</Text>
        <Button title="Increment" onPress={increment} />
      </View>
      <View style={style.bottomContainer}>
        <TouchableHighlight
          underlayColor="#196f3d"
          style={[style.btn, {backgroundColor: '#229954', borderWidth: 0}]}
          onPress={() => navigation.push('Login')}>
          <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#566573"
          style={[style.btn]}
          onPress={() => navigation.push('Login')}>
          <Text style={{textAlign: 'center', color: 'white'}}>Register</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  root: {
    padding: 20,
    height: '100%',
    display: 'flex',
    backgroundColor: '#154360',
  },
  bottomContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 50,
  },
  btn: {
    height: 50,
    width: '40%',
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#abb2b9',
    marginHorizontal: 20,
  },
});

const mapDispatchToProps = {
  increment: counterAction,
};

const mapStateToProps = (state) => {
  return {store: state};
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
