import { View, Text } from 'react-native'
import React from 'react'
import Btn from '../Components/Btn'
// import { useNavigation } from '@react-navigation/native'

const Search = (props) => {
  // hooks to navigate
  // const navigation = useNavigation();
  
  const {name, count} = props.route.params

  return (
    <View>
      <Text style={{fontSize:28, color: 'black'}}>Name: {name}</Text>
      <Text style={{fontSize:28, color: 'black'}}>Count: {count}</Text>
      <Btn title="Go to Settings Page" Press={() => {
        props.navigation.navigate('Setting')
      }}/>
      {/* Go Back  */}
      {/* <Btn title="Go Back" Press={() => 
        props.navigation.goBack()}/> */}
     
      {/* <Btn title="Go Back" Press={() => 
        props.navigation.replace('Search')}/> */}

    </View>
  )
}

export default Search