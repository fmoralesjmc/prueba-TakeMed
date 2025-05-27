import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

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
  const [animatedValues] = useState(
    healthTips.map(() => new Animated.Value(0))
  );

  useEffect(() => {
    // Animación de entrada escalonada
    const animations = animatedValues.map((animatedValue, index) =>
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      })
    );

    Animated.stagger(100, animations).start();
  }, []);

  const toggleTip = (tipId) => {
    setExpandedTip(expandedTip === tipId ? null : tipId);
  };

  const renderTipCard = (tip, index) => {
    const isExpanded = expandedTip === tip.id;
    const animatedValue = animatedValues[index];

    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0],
    });

    const opacity = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <Animated.View
        key={tip.id}
        style={[
          styles.tipCard,
          {
            transform: [{ translateY }],
            opacity,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => toggleTip(tip.id)}
          style={styles.tipHeader}
        >
          <View style={[styles.iconContainer, { backgroundColor: tip.color }]}>
            <Ionicons name={tip.icon} size={24} color="white" />
          </View>
          <View style={styles.tipHeaderText}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipPreview} numberOfLines={isExpanded ? 0 : 2}>
              {tip.description}
            </Text>
          </View>
          <Ionicons
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#7F8C8D"
          />
        </TouchableOpacity>
        
        {isExpanded && (
          <View style={styles.tipExpanded}>
            <View style={styles.separator} />
            <Text style={styles.tipFullDescription}>
              {tip.description}
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={[styles.actionButton, { backgroundColor: tip.color }]}>
                <Ionicons name="checkmark" size={16} color="white" />
                <Text style={styles.actionButtonText}>Completado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonSecondary}>
                <Ionicons name="bookmark-outline" size={16} color={tip.color} />
                <Text style={[styles.actionButtonTextSecondary, { color: tip.color }]}>
                  Guardar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Animated.View>
    );
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Consejos de Salud</Text>
          <Text style={styles.headerSubtitle}>
            Recomendaciones personalizadas para tu bienestar
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Consejos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Completados</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Días activo</Text>
          </View>
        </View>

        <View style={styles.tipsContainer}>
          {healthTips.map((tip, index) => renderTipCard(tip, index))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 Recuerda: La constancia es clave para mantener un estilo de vida saludable
          </Text>
        </View>
      </ScrollView>
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
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  },
  tipHeaderText: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
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
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
  actionButtonTextSecondary: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
  footer: {
    margin: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
}); 