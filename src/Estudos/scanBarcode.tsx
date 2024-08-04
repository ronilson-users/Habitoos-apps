
import { Camera, useCameraPermissions, CameraView } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';


type Prop = {
 type: string
 data: string
}

export default function ScanBarcode() {
 const [permission, requestPermission] = useCameraPermissions();
 const [scanned, setScanned] = useState(false);

 useEffect(() => {
  (async () => {
   const { status } = await Camera.requestCameraPermissionsAsync();

   if (status !== 'granted') {
    Alert.alert('Desculpe, precisamos da sua permissão para funcionar.');
   }
  })();
 }, [requestPermission]);

 const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
  setScanned(true);

  Alert.alert(`Código de barras escaneado:\nTipo: ${type}\nDados: ${data}`,

   [{ text: "OK", onPress: () => setScanned(false) }],
   { cancelable: false });
 };

 if (!permission?.granted) {
  return (
   <View style={styles.container}>
    <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
    <Button onPress={requestPermission} title="Conceder permissão" />
   </View>
  );
 }

 return (
  <CameraView
   style={styles.camera}
   onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
   barCodeScannerSettings={{
    barCodeTypes: [
     "qr",
     "pdf417",
     "ean13",
     "code128",
     "code39",
     "upc_a",
     "upc_e",
     "ean8",
     "itf14",
     "interleaved2of5",
     "codabar",
    ],
    interval: 10,



   }}
   barCodeSize={{ width: 500, height: 500 }}
  >
   <View style={styles.layerContainer}>
    <View style={styles.layerTop} />
    <View style={styles.layerCenter}>
     <View style={styles.layerLeft} />
     <View style={styles.focused} />
     <View style={styles.layerRight} />
    </View>
    <View style={styles.layerBottom} />
   </View>
  </CameraView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
 },
 camera: {
  flex: 1,
  width: '100%',
 },
 layerContainer: {
  flex: 1,
 },
 layerTop: {
  flex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
 layerCenter: {
  flex: 2,
  flexDirection: 'row',
 },
 layerLeft: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
 focused: {
  flex: 10,
  borderWidth: 2,
  borderColor: '#00FF00',
 },
 layerRight: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
 layerBottom: {
  flex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
 button: {
  padding: 10,
  borderRadius: 5,
  backgroundColor: '#007AFF',
  alignSelf: 'center',
  marginTop: 10,
 },
 scanAgainButton: {
  position: 'absolute',
  bottom: 20,
 },
 text: {
  color: '#FFF',
  textAlign: 'center',
 },
 message: {
  color: '#FFF',
  textAlign: 'center',
  marginBottom: 10,
 },
});