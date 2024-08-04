import { useState, useEffect } from 'react';
import { Camera, useCameraPermissions, CameraView } from 'expo-camera';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


type Prop = {
 type: string;
 data: string;
};


export default function ScanBarcode() {
 const [permission, requestPermission] = useCameraPermissions();
 const [scanned, setScanned] = useState(false);

 useEffect(() => {
  (async () => {
   const { status } = await Camera.requestCameraPermissionsAsync()


   if (status !== 'granted') {
    alert('Desculpe, precisamos da permissão da câmera para fazer isso funcionar!');
   }

  })()
  
 }, [])


 const handleBarCodeScanned = ({ type, data }: Prop) => {
  console.log('data:', data);

  setScanned(true);
  console.log('data1:', data);

  Alert.alert(
   `Código ${type} Scaneado`,
   `Dados: ${data}`,
   [
    {
     text: 'OK',
     onPress: () => setScanned(false),
    }
   ],
   { cancelable: false }
  );

 };

 return (
  
  <CameraView
   style={styles.camera}
   onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
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
  backgroundColor: '#f0f0f0',
 },
 
 permissionText: {
  fontSize: 18,
  marginBottom: 20,
  textAlign: 'center',
  color: '#333', 
 },
 
 camera: {
  flex: 1,
  justifyContent: 'flex-end',
 },
 
 layerContainer: {
  flex: 1,
 },
 
 layerTop: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
 },
 
 layerCenter: {
  flexDirection: 'row',
 },
 
 layerLeft: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
 },
 
 focused: {
  width: 200,
  height: 200,
  borderWidth: 2,
  borderColor: '#00FF00',
  backgroundColor: 'transparent', 
 },
 
 layerRight: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
 },
 
 layerBottom: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
 }
})