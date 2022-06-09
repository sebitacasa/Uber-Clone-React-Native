import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Map from '../componets/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions, useNavigation } from '@react-navigation/native';
import NavigateCard from '../componets/NavigateCard';
import RideOptionCard from '../componets/RideOptionCard';
import { Icon } from 'react-native-elements';

const MapScreen = () => {

  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  return (
    <View>

      <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg` }
      >
        <Icon
        name='menu'
        />
      </TouchableOpacity>
     
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
          name="NavigateCard"
          component={NavigateCard}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
          name="RideOptionCard"
          component={RideOptionCard} // aca se rutean los componentes
          options={{
            headerShown: false
          }}
          />
        
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})

