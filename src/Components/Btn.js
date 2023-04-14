import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Btn = ({title, Press}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#3C486B',
        borderRadius: 10,
        alignItems: 'center',
        width: 300,
        paddingVertical: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignSelf: 'center'
        
      }}
      onPress={Press}>
      <Text style={{fontSize: 28, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
