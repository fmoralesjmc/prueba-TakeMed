import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const healthTips = [
  {
    id: 1,
    icon: 'walk',
    title: 'Mantente Activo',
    description: 'Camina al menos 10,000 pasos diarios para mantener tu sistema cardiovascular saludable.',
    color: '#3498DB',
  },
  {
    id: 2,
    icon: 'water',
    title: 'Hidratación',
    description: 'Bebe al menos 8 vasos de agua al día para mantener tu cuerpo hidratado y funcionando correctamente.',
    color: '#2ECC71',
  },
  {
    id: 3,
    icon: 'moon',
    title: 'Descanso Adecuado',
    description: 'Duerme entre 7-9 horas diarias para permitir que tu cuerpo se recupere y regenere.',
    color: '#9B59B6',
  },
  {
    id: 4,
    icon: 'nutrition',
    title: 'Alimentación Balanceada',
    description: 'Consume frutas, verduras y proteínas magras para mantener una dieta equilibrada.',
    color: '#E67E22',
  },
  {
    id: 5,
    icon: 'heart',
    title: 'Monitoreo Cardíaco',
    description: 'Revisa tu ritmo cardíaco regularmente y mantén un registro de tus signos vitales.',
    color: '#E74C3C',
  },
  {
    id: 6,
    icon: 'happy',
    title: 'Salud Mental',
    description: 'Practica meditación o ejercicios de respiración para reducir el estrés y la ansiedad.',
    color: '#F39C12',
  },
];

export default function HealthTipsScreen() {
  const [expandedTip, setExpandedTip] = useState(null);
  const [scrollY] = useState(new Animated.Value(0));
  
  // Animaciones múltiples para cada elemento
  const [animatedValues] = useState(
    healthTips.map(() => new Animated.Value(0))
  );
  const [scaleValues] = useState(
    healthTips.map(() => new Animated.Value(1))
  );
  const [rotateValues] = useState(
    healthTips.map(() => new Animated.Value(0))
  );
  const [headerAnim] = useState(new Animated.Value(0));
  const [statsAnim] = useState(new Animated.Value(0));
  const [pulseAnim] = useState(new Animated.Value(1));
  const [floatingAnim] = useState(new Animated.Value(0));
  const [shimmerAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animación dramática de entrada del header
    const headerSequence = Animated.sequence([
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.back(1.5)),
        useNativeDriver: true,
      }),
    ]);

    // Animación de las estadísticas con rebote
    const statsSequence = Animated.timing(statsAnim, {
      toValue: 1,
      duration: 800,
      delay: 500,
      easing: Easing.elastic(1.2),
      useNativeDriver: true,
    });

    // Animación escalonada más dramática para las tarjetas
    const cardAnimations = animatedValues.map((animatedValue, index) =>
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 600,
        delay: 800 + (index * 150), // Más delay entre tarjetas
        easing: Easing.out(Easing.back(1.2)),
        useNativeDriver: true,
      })
    );

    // Ejecutar todas las animaciones
    Animated.parallel([
      headerSequence,
      statsSequence,
      ...cardAnimations,
    ]).start();

    // Iniciar animaciones continuas
    startContinuousAnimations();
  }, []);

  const startContinuousAnimations = () => {
    // Pulso continuo para elementos destacados
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Flotación suave
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingAnim, {
          toValue: -8,
          duration: 3000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatingAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Efecto shimmer
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const toggleTip = (tipId, index) => {
    // Animación de rotación del ícono
    Animated.timing(rotateValues[index], {
      toValue: expandedTip === tipId ? 0 : 1,
      duration: 300,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();

    // Animación de escala al tocar
    Animated.sequence([
      Animated.timing(scaleValues[index], {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValues[index], {
        toValue: 1,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();

    setExpandedTip(expandedTip === tipId ? null : tipId);
  };

  const renderTipCard = (tip, index) => {
    const isExpanded = expandedTip === tip.id;
    const animatedValue = animatedValues[index];
    const scaleValue = scaleValues[index];
    const rotateValue = rotateValues[index];

    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    const opacity = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const rotateZ = rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const shimmerTranslate = shimmerAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, width],
    });

    return (
      <Animated.View
        key={tip.id}
        style={[
          styles.tipCard,
          {
            transform: [
              { translateY },
              { scale: scaleValue },
              { rotateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['45deg', '0deg'],
              })},
            ],
            opacity,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => toggleTip(tip.id, index)}
          style={styles.tipHeader}
          activeOpacity={0.8}
        >
          <Animated.View 
            style={[
              styles.iconContainer, 
              { 
                backgroundColor: tip.color,
                transform: [
                  { rotateZ },
                  { scale: pulseAnim },
                ],
              }
            ]}
          >
            <Ionicons name={tip.icon} size={24} color="white" />
            
            {/* Efecto shimmer */}
            <Animated.View
              style={[
                styles.shimmerEffect,
                {
                  transform: [{ translateX: shimmerTranslate }],
                }
              ]}
            />
          </Animated.View>
          
          <Animated.View 
            style={[
              styles.tipHeaderText,
              {
                transform: [{ translateY: floatingAnim }],
              }
            ]}
          >
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipPreview} numberOfLines={isExpanded ? 0 : 2}>
              {tip.description}
            </Text>
          </Animated.View>
          
          <Animated.View
            style={{
              transform: [
                { 
                  rotateZ: rotateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  })
                },
                { scale: pulseAnim },
              ],
            }}
          >
            <Ionicons
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#7F8C8D"
            />
          </Animated.View>
        </TouchableOpacity>
        
        {isExpanded && (
          <Animated.View 
            style={[
              styles.tipExpanded,
              {
                opacity: animatedValue,
                transform: [
                  { 
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    })
                  },
                ],
              }
            ]}
          >
            <View style={styles.separator} />
            <Text style={styles.tipFullDescription}>
              {tip.description}
            </Text>
            <Animated.View 
              style={[
                styles.actionButtons,
                {
                  transform: [{ scale: statsAnim }],
                }
              ]}
            >
              <TouchableOpacity 
                style={[styles.actionButton, { backgroundColor: tip.color }]}
                activeOpacity={0.8}
              >
                <Ionicons name="checkmark" size={16} color="white" />
                <Text style={styles.actionButtonText}>Completado</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionButtonSecondary}
                activeOpacity={0.8}
              >
                <Ionicons name="bookmark-outline" size={16} color={tip.color} />
                <Text style={[styles.actionButtonTextSecondary, { color: tip.color }]}>
                  Guardar
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        )}
      </Animated.View>
    );
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Header con animación dramática */}
        <Animated.View 
          style={[
            styles.header,
            {
              transform: [
                { 
                  translateY: headerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                  })
                },
                { scale: headerAnim },
                { rotateX: headerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['45deg', '0deg'],
                })},
              ],
              opacity: headerAnim,
            }
          ]}
        >
          <Animated.Text 
            style={[
              styles.headerTitle,
              {
                transform: [{ scale: pulseAnim }],
              }
            ]}
          >
            Consejos de Salud
          </Animated.Text>
          <Animated.Text 
            style={[
              styles.headerSubtitle,
              {
                transform: [{ translateY: floatingAnim }],
              }
            ]}
          >
            Recomendaciones personalizadas para tu bienestar
          </Animated.Text>
        </Animated.View>

        {/* Estadísticas con animación elástica */}
        <Animated.View 
          style={[
            styles.statsContainer,
            {
              transform: [
                { scale: statsAnim },
                { 
                  rotateX: statsAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['45deg', '0deg'],
                  })
                },
              ],
              opacity: statsAnim,
            }
          ]}
        >
          {[
            { number: '6', label: 'Consejos' },
            { number: '85%', label: 'Completados' },
            { number: '12', label: 'Días activo' },
          ].map((stat, index) => (
            <Animated.View 
              key={index}
              style={[
                styles.statItem,
                {
                  transform: [
                    { 
                      translateY: statsAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      })
                    },
                    { scale: pulseAnim },
                  ],
                }
              ]}
            >
              <Animated.Text 
                style={[
                  styles.statNumber,
                  {
                    transform: [{ scale: pulseAnim }],
                  }
                ]}
              >
                {stat.number}
              </Animated.Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Animated.View>
          ))}
        </Animated.View>

        {/* Contenedor de consejos con parallax */}
        <Animated.View 
          style={[
            styles.tipsContainer,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, -50],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }
          ]}
        >
          {healthTips.map((tip, index) => renderTipCard(tip, index))}
        </Animated.View>

        {/* Footer con animación */}
        <Animated.View 
          style={[
            styles.footer,
            {
              opacity: headerAnim,
              transform: [
                { 
                  translateY: headerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  })
                },
                { scale: pulseAnim },
              ],
            }
          ]}
        >
          <Animated.Text 
            style={[
              styles.footerText,
              {
                transform: [{ translateY: floatingAnim }],
              }
            ]}
          >
            💡 Recuerda: La constancia es clave para mantener un estilo de vida saludable
          </Animated.Text>
        </Animated.View>
      </Animated.ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 15,
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
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  tipsContainer: {
    paddingHorizontal: 20,
  },
  tipCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
    overflow: 'hidden',
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  shimmerEffect: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 20,
  },
  tipHeaderText: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
    textShadowColor: 'rgba(44, 62, 80, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  tipPreview: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
  },
  tipExpanded: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#ECF0F1',
    marginBottom: 15,
  },
  tipFullDescription: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 22,
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    flex: 0.48,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  actionButtonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ECF0F1',
    flex: 0.48,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  actionButtonTextSecondary: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
  footer: {
    margin: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
}); 