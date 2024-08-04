import React, { useState } from 'react';
import { Camera, CameraType, useCameraPermissions, BarCodeScanner } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const ScanBarcode = () => {
 const [facing, setFacing] = useState('back');
 const [permission, requestPermission] = useCameraPermissions();
 const [scanned, setScanned] = useState(false);

 // Verificar permissões da câmera
 if (!permission) {
  return <View />;
 }

 if (!permission?.granted) {
  return (
   <View style={styles.container}>
    <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
    <Button onPress={requestPermission} title="Conceder permissão" />
   </View>
  );
 }

 // Função de tratamento de código de barras escaneado
 const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
  setScanned(true);
  Alert.alert(`Código de barras escaneado:\nTipo: ${type}\nDados: ${data}`);
 };


 // Alternador da câmera frontal/traseira
 const toggleCameraFacing = () => {
  setFacing(current => (current === 'back' ? 'front' : 'back'));
 };

 return (
  <View style={styles.container}>
   <Camera
    style={styles.camera}
    type={facing}
    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    barCodeScannerSettings={{
     barCodeTypes: [
      "qr",

     ],
    }}
   >
    <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
      <Text style={styles.text}>Trocar câmera</Text>
     </TouchableOpacity>
    </View>
   </Camera>
   {scanned && (
    <TouchableOpacity
     style={[styles.button, styles.scanAgainButton]}
     onPress={() => setScanned(false)}
    >
     <Text style={styles.text}>Escanear novamente</Text>
    </TouchableOpacity>
   )}
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
 },
 message: {
  textAlign: 'center',
  paddingBottom: 10,
 },
 camera: {
  flex: 1,
 },
 buttonContainer: {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: 'transparent',
  margin: 64,
 },
 button: {
  flex: 1,
  alignSelf: 'flex-end',
  alignItems: 'center',
 },
 text: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
 },
 scanAgainButton: {
  backgroundColor: '#f54747',
 },
});

export default ScanBarcode;