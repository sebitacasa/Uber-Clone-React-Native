import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOption from "../componets/NavOption";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {API_KEY} from '@env'
import {useDispatch} from 'react-redux'

const api = "AIzaSyAbywGZWtzaib7JCsB88OHHQ6hw_Kg-VEg"
import { setOrigin, setDestination } from "../slices/navSlice";
import NavFavourites from "../componets/NavFavourites";



const HomeScreen = () => {
  const dispatch = useDispatch()


  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
        placeholder="Where From"
        styles={{
          container:{
            flex: 0 
          },
          textInput: {
            fontSize: 18,
          }
        }}
        onPress={(data, details = null) => {
         dispatch(
           setOrigin({
           location: details.geometry.location,
           description: data.description
         }))
         
        } }
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: API_KEY,
          language:"en"
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />
        <NavOption/>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
