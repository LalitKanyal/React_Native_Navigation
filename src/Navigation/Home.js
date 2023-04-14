import {View, Text} from 'react-native';
import React from 'react';
import Btn from '../Components/Btn';

const Home = props => {
  return (
    <View>
      <Text>Home</Text>
      <Btn
        title="Go to Search Page"
        Press={() => {
          props.navigation.navigate('Search', {
            name: 'Lalit',
            count: 0,
          });
        }}
      />
    </View>
  );
};

export default Home;
