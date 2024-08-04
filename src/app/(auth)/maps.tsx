// maps.tsx
import React, { useEffect, useState, useRef } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

interface LocationObject {
 coords: {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;

 };
 timestamp: number;
}






const destinations = [
 { latitude: -23.550520, longitude: -46.633308, title: "Destination 1", description: "Place you want to visit 1" },
 
];

export default function Maps() {
 const [location, setLocation] = useState<LocationObject | null>(null);
 const [errorMsg, setErrorMsg] = useState<string | null>(null);

 async function requestLocationPermissions() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
   setErrorMsg('Permission to access location was denied');
   return;
  }

  let location = await Location.getCurrentPositionAsync({});
  setLocation(location);
  console.log('location', location);
 }

 useEffect(() => {
  requestLocationPermissions();
 }, []);

 return (
  <View style={styles.container}>
   {location ? (
    <MapView
     style={styles.map}
     region={{
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
     }}
    >
     <Marker
      coordinate={{
       latitude: location.coords.latitude,
       longitude: location.coords.longitude,
      }}
      title="You are here"
      description="This is your current location"
     />

    

    

    </MapView>
   ) : (
    <Text>{errorMsg || 'Fetching location...'}</Text>
   )}
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 map: {
  flex: 1,
  width: '100%',
  height: '100%',
 },
});