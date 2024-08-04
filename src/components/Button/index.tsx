import {
 TouchableOpacity,
 TouchableOpacityProps,
 Text,
 ActivityIndicator,
} from 'react-native';

import {
 Foundation,
 Ionicons,

} from '@expo/vector-icons';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
 title: string;
 isLoading?: boolean;
 icon: keyof typeof Ionicons.glyphMap;
}

export function Button({ title, isLoading = false, icon, ...rest }: ButtonProps) {
 return (
  <TouchableOpacity
   style={styles.container}
   disabled={isLoading}
   ActiviteOpacity={0.8}
   {...rest}>
   {isLoading ? (
    <ActivityIndicator />
   ) : (
    <>
     <Ionicons name={icon} style={styles.icon} />
     <Text style={styles.text}>{title}</Text>
    </>
   )}
  </TouchableOpacity>
 );
}


