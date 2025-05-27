# TakeMed Health Monitor

Una aplicación móvil para el monitoreo remoto de pacientes crónicos y acompañamiento deportivo con inteligencia artificial, desarrollada con React Native y Expo.

## 🚀 Características

- **Pantalla Principal**: Muestra información del usuario, contador de pasos diarios y sincronización con dispositivos BLE
- **Consejos de Salud**: Lista interactiva de recomendaciones personalizadas de salud
- **Animaciones**: Efectos visuales suaves y atractivos
- **UI Moderna**: Diseño limpio y profesional con gradientes y sombras
- **Navegación**: Navegación por pestañas entre las diferentes secciones

## 📱 Funcionalidades

### Pantalla Principal
- Visualización del nombre del usuario
- Contador de pasos diarios (ejemplo: "7,850 pasos")
- Botón de sincronización con dispositivo BLE
- Simulación de sincronización de 2 segundos
- Mensaje de confirmación: "Sincronización exitosa con el dispositivo BLE"
- Barra de progreso visual para la meta de pasos
- Información adicional (ritmo cardíaco, batería del dispositivo)

### Pantalla de Consejos
- Lista de 6 consejos de salud personalizados
- Tarjetas expandibles con información detallada
- Estadísticas de progreso
- Botones de acción (completar, guardar)
- Animaciones de entrada escalonadas

## 🛠️ Tecnologías Utilizadas

- **React Native** con **Expo**
- **React Navigation** para navegación
- **Expo Linear Gradient** para efectos visuales
- **Expo Vector Icons** para iconografía
- **Animated API** para animaciones

## 📋 Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Instalación de Expo CLI

```bash
npm install -g expo-cli
```

## 🚀 Instrucciones de Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd prueba-TakeMed
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm start
```

o

```bash
expo start
```

### 4. Visualizar en dispositivo

Después de ejecutar el comando anterior, se abrirá una página web con un código QR. Tienes varias opciones:

#### Opción A: Dispositivo físico
1. Instala la app **Expo Go** en tu dispositivo móvil:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Escanea el código QR con la cámara (iOS) o con la app Expo Go (Android)

#### Opción B: Simulador/Emulador
- **iOS Simulator**: Presiona `i` en la terminal
- **Android Emulator**: Presiona `a` en la terminal
- **Web**: Presiona `w` en la terminal

## 📁 Estructura del Proyecto

```
prueba-TakeMed/
├── App.js                      # Componente principal con navegación
├── src/
│   └── screens/
│       ├── HomeScreen.js       # Pantalla principal
│       └── HealthTipsScreen.js # Pantalla de consejos
├── package.json                # Dependencias del proyecto
├── app.json                    # Configuración de Expo
├── babel.config.js             # Configuración de Babel
└── README.md                   # Este archivo
```

## 🎨 Características de Diseño

- **Gradientes**: Fondos con gradientes atractivos
- **Sombras**: Efectos de profundidad en las tarjetas
- **Animaciones**: 
  - Rotación del ícono durante la sincronización
  - Entrada escalonada de elementos
  - Transiciones suaves
- **Iconografía**: Íconos vectoriales de Ionicons
- **Tipografía**: Jerarquía clara y legible
- **Colores**: Paleta profesional y accesible

## 🔧 Comandos Disponibles

```bash
# Iniciar el servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web
npm run web
```

## 📱 Funcionalidades Implementadas

### ✅ Requisitos Funcionales Completados

1. **Pantalla principal** ✅
   - Nombre del usuario
   - Número de pasos diarios
   - Botón "Sincronizar dispositivo"

2. **Simulación de sincronización BLE** ✅
   - Duración de 2 segundos
   - Mensaje de confirmación

3. **Segunda pantalla con consejos** ✅
   - Lista de recomendaciones de salud
   - Navegación entre vistas

4. **Elementos visuales y animaciones** ✅
   - Animaciones de carga
   - Efectos visuales atractivos

### ✅ Requisitos Técnicos Completados

- **Código organizado** en componentes
- **Separación** entre lógica y UI
- **Proyecto funcional** con instrucciones claras
- **Estilos aplicados** para UI limpia

## 🐛 Solución de Problemas

### Error: "Metro bundler not found"
```bash
npx expo install
```

### Error: "Unable to resolve module"
```bash
rm -rf node_modules
npm install
```

### Error en iOS Simulator
```bash
npx expo install --fix
```

## 📞 Soporte

Si encuentras algún problema durante la instalación o ejecución:

1. Verifica que tienes las versiones correctas de Node.js y Expo CLI
2. Asegúrate de que todas las dependencias estén instaladas
3. Revisa que tu dispositivo/emulador esté conectado correctamente

## 🎯 Próximas Mejoras

- Integración real con dispositivos BLE
- Persistencia de datos local
- Notificaciones push
- Gráficos de progreso histórico
- Autenticación de usuarios
- Sincronización con servicios de salud

---

**Desarrollado con ❤️ para TakeMed** 