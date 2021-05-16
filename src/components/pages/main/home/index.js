import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {httpToken} from '../../../../config/services/helpers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home({navigation}) {
  const [dataCovidIndo, setdataCovidIndo] = useState({});

  const api = async () => {
    const token = null;
    try {
      let resDataCovid = await httpToken(token).get('/');
      setdataCovidIndo(resDataCovid.data[0]);
    } catch (error) {
      Alert.alert('Gagal mengambil data');
    }
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <View style={{width: '90%', alignSelf: 'center', marginVertical: 20}}>
      <View
        style={{
          borderRadius: 10,
          padding: 20,
          backgroundColor: '#16a085',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Data Covid19 Indonesia
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="head-side-cough"
              size={20}
              style={{color: 'white', marginHorizontal: 7}}
            />
            <Text style={{color: 'white'}}>{dataCovidIndo.positif}</Text>
          </View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="book-dead"
              size={20}
              style={{color: 'white', marginHorizontal: 7}}
            />
            <Text style={{color: 'white'}}>{dataCovidIndo.meninggal}</Text>
          </View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5
              name="heartbeat"
              size={20}
              style={{color: 'white', marginHorizontal: 7}}
            />
            <Text style={{color: 'white'}}>{dataCovidIndo.sembuh}</Text>
          </View>
        </View>
      </View>
      {/* <Button onPress={() => navigation.push('Tes')} title="Tes" /> */}
    </View>
  );
}
