import React from 'react';
import {View, Text, Alert, Image, TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ListItem from '../../../molecules/profile/ListItem';

export default function Profile() {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: '90%'}}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            width: '100%',
            height: '20%',
            marginVertical: 10,
          }}>
          <View
            style={{
              backgroundColor: '#eaecee',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 40, height: 40, marginHorizontal: 20}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View style={{flex: 2}}>
              <Text style={{fontWeight: 'bold'}}>Alfin</Text>
              <Text style={{fontSize: 12, textAlign: 'justify'}}>
                Saya adalah anak yang baik karena mama memberi batu batre ABC
              </Text>
            </View>
            <View style={{flex: 1, marginLeft: 15}}>
              <SmallBox icon="coins" />
              <SmallBox />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{marginVertical: 10}}>
          <ListItem title="Pengaturan Akun" radiusTop />
          <ListItem title="Simulasi Covid19" />
          <ListItem title="Pengaturan Bank" />
          <ListItem title="Alamat" />
          <ListItem title="Pengaturan Aplikasi" />
          <ListItem title="Syarat dan Ketentuan Aplikasi" />
          <ListItem title="Bantuan" />
          <ListItem title="Undang Teman" radiusBottom />
        </View>
        <View style={{marginVertical: 10}}>
          <ListItem
            title="Logout"
            icon="power-off"
            radiusTop
            radiusBottom
            onPress={() => navigator.push('Awal')}
          />
        </View>
      </View>
    </View>
  );
}

function SmallBox({icon, jumlah}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
      }}>
      <FontAwesome5
        name={icon || 'wallet'}
        color={'#2e86c1'}
        size={15}
        style={{marginRight: 5}}
      />
      <Text>{jumlah || 20000}</Text>
    </View>
  );
}
