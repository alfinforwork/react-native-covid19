import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {http} from '../../config/services/helpers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {counterAction} from '../../config/redux/action';

function Login({navigation}) {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    navigation.push('Main');
    // http
    //   .get('/')
    //   .then((res) => {
    //     Alert.alert(res.data[0].dirawat);
    //     console.log(res.data[0]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <>
      {/* <ScrollView> */}
      <View style={style.root}>
        <View style={style.content}>
          <View style={style.headMain}>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#2c3e50'}}>
              Login
            </Text>
          </View>
          <View style={style.inputContainer}>
            <FontAwesome5 name="user" size={20} style={style.inputLeftIcon} />
            <TextInput
              placeholder="Email"
              style={style.textInput}
              value={username}
              onChange={setusername}
              autoFocus
              blurOnSubmit={false}
            />
          </View>
          <View style={style.inputContainer}>
            <FontAwesome5 name="key" size={20} style={style.inputLeftIcon} />
            <TextInput
              placeholder="Password"
              style={style.textInput}
              value={password}
              onChange={setPassword}
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          <TouchableHighlight style={style.btnLogin} onPress={onSubmit}>
            <View>
              <Text style={{color: 'white'}}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      {/* </ScrollView> */}
    </>
  );
}

// backgroundColor: '#154360',
const style = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17202a',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  content: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputContainer: {position: 'relative', marginVertical: 10},
  inputLeftIcon: {position: 'absolute', top: 10, left: 10, color: '#3498db'},
  textInput: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 5,
    height: 40,
    paddingLeft: 45,
    paddingRight: 20,
    margin: 0,
  },
  btnLogin: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});

const mapDispatchToProps = {
  increment: counterAction,
};

const mapStateToProps = (state) => {
  return {store: state};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
