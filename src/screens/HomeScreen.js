import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [steps, setSteps] = useState(7850);
  
  // Animaciones múltiples
  const [syncAnimatedValue] = useState(new Animated.Value(0));
  const [fadeInAnim] = useState(new Animated.Value(0));
  const [slideInAnim] = useState(new Animated.Value(-width));
  const [scaleAnim] = useState(new Animated.Value(0));
  const [pulseAnim] = useState(new Animated.Value(1));
  const [bounceAnim] = useState(new Animated.Value(0));
  const [heartBeatAnim] = useState(new Animated.Value(1));
  const [progressAnim] = useState(new Animated.Value(0));
  const [floatingAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animación de entrada secuencial
    const entranceSequence = Animated.sequence([
      // Fade in general
      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Slide in de la tarjeta de usuario
      Animated.timing(slideInAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.back(1.5)),
        useNativeDriver: true,
      }),
    ]);

    // Animación de escala para la tarjeta de pasos
    const scaleSequence = Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 800,
      delay: 400,
      easing: Easing.elastic(1.2),
      useNativeDriver: true,
    });

    // Animación de rebote para el botón
    const bounceSequence = Animated.timing(bounceAnim, {
      toValue: 1,
      duration: 600,
      delay: 800,
      easing: Easing.bounce,
      useNativeDriver: true,
    });

    // Animación de progreso
    const progressSequence = Animated.timing(progressAnim, {
      toValue: 1,
      duration: 1500,
      delay: 1000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    });

    // Ejecutar animaciones
    Animated.parallel([
      entranceSequence,
      scaleSequence,
      bounceSequence,
      progressSequence,
    ]).start();

    // Animaciones continuas
    startContinuousAnimations();
  }, []);

  const startContinuousAnimations = () => {
    // Pulso continuo para el avatar
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Latido del corazón
    Animated.loop(
      Animated.sequence([
        Animated.timing(heartBeatAnim, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(heartBeatAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(heartBeatAnim, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(heartBeatAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Flotación suave solo para íconos
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingAnim, {
          toValue: -10,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatingAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const handleSync = () => {
    setIsLoading(true);
    
    // Animación de rotación para el ícono
    Animated.loop(
      Animated.timing(syncAnimatedValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Animación de vibración del botón
    const shakeAnimation = Animated.sequence([
      Animated.timing(bounceAnim, { toValue: 0.95, duration: 50, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1.05, duration: 50, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 0.95, duration: 50, useNativeDriver: true }),
      Animated.timing(bounceAnim, { toValue: 1, duration: 50, useNativeDriver: true }),
    ]);

    shakeAnimation.start();

    // Simular sincronización de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      syncAnimatedValue.stopAnimation();
      syncAnimatedValue.setValue(0);
      
      // Simular actualización de pasos con animación
      const newSteps = Math.floor(Math.random() * 2000) + 7000;
      
      // Animación de actualización de pasos
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      setSteps(newSteps);
      
      // Animación de éxito
      const successAnimation = Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1.2,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 150,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
      ]);

      successAnimation.start();
      
      Alert.alert(
        'Sincronización exitosa',
        'Sincronización exitosa con el dispositivo BLE',
        [{ text: 'OK' }]
      );
    }, 2000);
  };

  const spin = syncAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', `${Math.min((steps / 10000) * 100, 100)}%`],
  });

  return (
    <LinearGradient
      colors={['#4A90E2', '#7BB3F0']}
      style={styles.container}
    >
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeInAnim,
          }
        ]}
      >
        {/* Tarjeta de usuario con animación de slide */}
        <Animated.View 
          style={[
            styles.userCard,
            {
              transform: [
                { translateX: slideInAnim },
              ],
            }
          ]}
        >
          <Animated.View 
            style={[
              styles.avatarContainer,
              {
                transform: [{ scale: pulseAnim }],
              }
            ]}
          >
            <Ionicons name="person" size={40} color="#4A90E2" />
          </Animated.View>
          <Text style={styles.userName}>Dr. Francisco Morales</Text>
          <Text style={styles.userSubtitle}>Paciente Monitorizado</Text>
        </Animated.View>

        {/* Tarjeta de pasos con animación de escala */}
        <Animated.View 
          style={[
            styles.stepsCard,
            {
              transform: [{ scale: scaleAnim }],
            }
          ]}
        >
          <View style={styles.stepsHeader}>
            <Animated.View
              style={{
                transform: [{ translateY: floatingAnim }],
              }}
            >
              <Ionicons name="walk" size={30} color="#4A90E2" />
            </Animated.View>
            <Text style={styles.stepsTitle}>Pasos de Hoy</Text>
          </View>
          
          <Animated.Text 
            style={[
              styles.stepsCount,
              {
                transform: [{ scale: scaleAnim }],
              }
            ]}
          >
            {steps.toLocaleString()}
          </Animated.Text>
          <Text style={styles.stepsSubtitle}>pasos</Text>
          
          {/* Barra de progreso visual con animación */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <Animated.View 
                style={[
                  styles.progressFill, 
                  { width: progressWidth }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>Meta: 10,000 pasos</Text>
          </View>
        </Animated.View>

        {/* Botón de sincronización con animación de rebote */}
        <Animated.View
          style={{
            transform: [{ scale: bounceAnim }],
          }}
        >
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
        </Animated.View>

        {/* Información adicional con animaciones */}
        <Animated.View 
          style={[
            styles.infoContainer,
            {
              opacity: fadeInAnim,
              transform: [{ translateY: bounceAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              })}],
            }
          ]}
        >
          <View style={styles.infoItem}>
            <Animated.View
              style={{
                transform: [{ scale: heartBeatAnim }],
              }}
            >
              <Ionicons name="heart" size={20} color="#E74C3C" />
            </Animated.View>
            <Text style={styles.infoText}>Ritmo cardíaco: 72 bpm</Text>
          </View>
          <View style={styles.infoItem}>
            <Animated.View
              style={{
                transform: [{ translateY: floatingAnim }],
              }}
            >
              <Ionicons name="battery-half" size={20} color="#27AE60" />
            </Animated.View>
            <Text style={styles.infoText}>Dispositivo: 85%</Text>
          </View>
        </Animated.View>
      </Animated.View>
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
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#4A90E2',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
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
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
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
    textShadowColor: 'rgba(74, 144, 226, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
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
    shadowColor: '#4A90E2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
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
    shadowColor: '#27AE60',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  syncButtonLoading: {
    backgroundColor: '#95A5A6',
  },
  syncButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
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