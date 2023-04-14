import {View, Text} from 'react-native';
import React from 'react';
import Btn from '../Components/Btn';

const Setting = props => {
  return (
    <View>
      <Text>Setting</Text>
      <Btn
        title="Go to Home Page"
        Press={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Setting;
