import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Easing,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [steps, setSteps] = useState(7850);
  const [animatedValue] = useState(new Animated.Value(0));

  const handleSync = () => {
    setIsLoading(true);
    
    // Animación de rotación para el ícono
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Simular sincronización de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      animatedValue.stopAnimation();
      animatedValue.setValue(0);
      
      // Simular actualización de pasos
      const newSteps = Math.floor(Math.random() * 2000) + 7000;
      setSteps(newSteps);
      
      Alert.alert(
        'Sincronización exitosa',
        'Sincronización exitosa con el dispositivo BLE',
        [{ text: 'OK' }]
      );
    }, 2000);
  };

  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient
      colors={['#4A90E2', '#7BB3F0']}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Tarjeta de usuario */}
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={40} color="#4A90E2" />
          </View>
          <Text style={styles.userName}>Dr. Francisco Morales</Text>
          <Text style={styles.userSubtitle}>Paciente Monitorizado</Text>
        </View>

        {/* Tarjeta de pasos */}
        <View style={styles.stepsCard}>
          <View style={styles.stepsHeader}>
            <Ionicons name="walk" size={30} color="#4A90E2" />
            <Text style={styles.stepsTitle}>Pasos de Hoy</Text>
          </View>
          <Text style={styles.stepsCount}>{steps.toLocaleString()}</Text>
          <Text style={styles.stepsSubtitle}>pasos</Text>
          
          {/* Barra de progreso visual */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${Math.min((steps / 10000) * 100, 100)}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>Meta: 10,000 pasos</Text>
          </View>
        </View>

        {/* Botón de sincronización */}
        <TouchableOpacity
          style={[styles.syncButton, isLoading && styles.syncButtonLoading]}
          onPress={handleSync}
          disabled={isLoading}
        >
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Ionicons 
              name={isLoading ? "sync" : "bluetooth"} 
              size={24} 
              color="white" 
            />
          </Animated.View>
          <Text style={styles.syncButtonText}>
            {isLoading ? 'Sincronizando...' : 'Sincronizar dispositivo'}
          </Text>
        </TouchableOpacity>

        {/* Información adicional */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="heart" size={20} color="#E74C3C" />
            <Text style={styles.infoText}>Ritmo cardíaco: 72 bpm</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="battery-half" size={20} color="#27AE60" />
            <Text style={styles.infoText}>Dispositivo: 85%</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  userCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  userSubtitle: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  stepsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginLeft: 10,
  },
  stepsCount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 5,
  },
  stepsSubtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#ECF0F1',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  syncButton: {
    backgroundColor: '#27AE60',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  syncButtonLoading: {
    backgroundColor: '#95A5A6',
  },
  syncButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#2C3E50',
    marginLeft: 10,
  },
}); 