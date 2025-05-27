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

### Para Emuladores (Opcional)

#### iOS Simulator (Solo macOS)
- **Xcode**: Instala desde Mac App Store
- **iOS Simulator**: Se incluye con Xcode

#### Android Emulator
- **Android Studio**: [Descargar aquí](https://developer.android.com/studio)
- **Android SDK**: Se configura automáticamente con Android Studio
- **Emulador Android**: Crear un dispositivo virtual desde Android Studio

## 🚀 Instrucciones de Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/fmoralesjmc/prueba-TakeMed.git
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

### 4. Opciones de Visualización

Después de ejecutar el comando anterior, se abrirá una página web con un código QR y opciones de ejecución:

#### 📱 Opción A: Dispositivo físico
1. Instala la app **Expo Go** en tu dispositivo móvil:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Escanea el código QR con la cámara (iOS) o con la app Expo Go (Android)

#### 💻 Opción B: Emuladores/Simuladores

##### iOS Simulator (macOS únicamente)
```bash
# Método 1: Desde la terminal de Expo
# Presiona 'i' en la terminal donde está corriendo expo start

# Método 2: Comando directo
npm run ios
# o
expo start --ios
```

**Requisitos para iOS:**
- macOS (iOS Simulator no funciona en Windows/Linux)
- Xcode instalado desde Mac App Store
- iOS Simulator configurado

**Pasos detallados:**
1. Abre Xcode
2. Ve a `Xcode > Preferences > Components`
3. Descarga el simulador de iOS deseado
4. Ejecuta `expo start` y presiona `i`

##### Android Emulator
```bash
# Método 1: Desde la terminal de Expo
# Presiona 'a' en la terminal donde está corriendo expo start

# Método 2: Comando directo
npm run android
# o
expo start --android
```

**Requisitos para Android:**
- Android Studio instalado
- Android SDK configurado
- Emulador Android creado y ejecutándose

**Pasos detallados:**
1. Abre Android Studio
2. Ve a `Tools > AVD Manager`
3. Crea un nuevo dispositivo virtual (recomendado: Pixel 4 con API 30+)
4. Inicia el emulador
5. Ejecuta `expo start` y presiona `a`

##### Web Browser
```bash
# Método 1: Desde la terminal de Expo
# Presiona 'w' en la terminal donde está corriendo expo start

# Método 2: Comando directo
npm run web
# o
expo start --web
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8081`

## 🔧 Comandos Disponibles

```bash
# Iniciar el servidor de desarrollo
npm start
expo start

# Ejecutar específicamente en cada plataforma
npm run android    # Android emulator
npm run ios        # iOS simulator (solo macOS)
npm run web        # Navegador web

# Comandos de Expo CLI
expo start --android    # Abrir directamente en Android
expo start --ios        # Abrir directamente en iOS
expo start --web        # Abrir directamente en web
expo start --clear      # Limpiar caché y reiniciar
```

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
├── metro.config.js             # Configuración de Metro
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

### Android Emulator no detectado
```bash
# Verificar que el emulador esté ejecutándose
adb devices

# Reiniciar ADB si es necesario
adb kill-server
adb start-server
```

### Error de dependencias incompatibles
```bash
npx expo install --fix
```

### Problemas con caché
```bash
expo start --clear
# o
npx expo start --clear
```

## 📞 Soporte

Si encuentras algún problema durante la instalación o ejecución:

1. Verifica que tienes las versiones correctas de Node.js y Expo CLI
2. Asegúrate de que todas las dependencias estén instaladas
3. Para iOS: Verifica que Xcode esté instalado y actualizado
4. Para Android: Verifica que Android Studio esté configurado correctamente
5. Revisa que tu dispositivo/emulador esté conectado correctamente

### Enlaces Útiles
- [Documentación oficial de Expo](https://docs.expo.dev/)
- [Configuración de Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Configuración de iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)

## 🎯 Próximas Mejoras

- Integración real con dispositivos BLE
- Persistencia de datos local
- Notificaciones push
- Gráficos de progreso histórico
- Autenticación de usuarios
- Sincronización con servicios de salud

---

**Desarrollado con ❤️ para TakeMed** 