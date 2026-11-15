# Z_Django

## Descripción general

Este repositorio contiene un proyecto orientado a la atención virtual para la carrera de Ingeniería Mecatrónica. La solución combina una interfaz web desarrollada en React con un chatbot basado en Rasa para responder preguntas académicas y de orientación sobre la carrera, materias, laboratorios, acreditación, perfil profesional y opciones de empleo.

Aunque el nombre del repositorio hace referencia a Django, la implementación activa del proyecto no está centrada en un backend Django; el componente principal de inteligencia artificial se encuentra en `Bot_Edison` y la capa de usuario está en `z_frontend`.

## Objetivo del proyecto

- Proveer una interfaz de conversación en español.
- Orientar a estudiantes sobre la carrera de Ingeniería Mecatrónica.
- Responder dudas frecuentes sobre plan de estudios, modalidad, duración, costos y perfil profesional.
- Permitir interacción por texto, voz y salida de audio.

## Stack tecnológico

- Frontend: React + Bootstrap + React Router
- Chatbot: Rasa 2.x
- Integración: webhook REST del bot hacia la interfaz web
- Contenedores: Docker / Docker Compose
- Python: entorno para ejecutar Rasa y dependencias del bot
- Node.js: entorno para compilar y ejecutar la aplicación React

## Estructura del repositorio

```text
Z_Django/
├── Bot_Edison/
│   ├── actions/
│   ├── data/
│   ├── models/
│   ├── tests/
│   ├── config.yml
│   ├── domain.yml
│   ├── endpoints.yml
│   ├── requirements.txt
│   ├── Dockerfile
│   └── ...
├── z_frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── ...
├── docker-compose.yaml
├── requirements.txt
├── README.md
└── .gitignore
```

## Componentes principales

### 1) Bot_Edison

`Bot_Edison` es el componente principal del asistente virtual. Define intenciones, respuestas y flujo conversacional en español. La configuración clave se encuentra en:

- `Bot_Edison/config.yml`: configuración del pipeline de Rasa
- `Bot_Edison/domain.yml`: intents, respuestas y contenido del bot
- `Bot_Edison/actions/`: lógica de acciones del asistente
- `Bot_Edison/data/`: datos de entrenamiento y configuración de conversaciones

El chatbot está orientado a temas como:

- materias de la carrera
- laboratorios
- acreditación
- mercado laboral
- perfil profesional
- duración y costo de la carrera
- definición y funciones del ingeniero mecatrónico

### 2) z_frontend

`z_frontend` es la aplicación web del cliente. Incluye navegación, pantalla de inicio y un módulo de chatbot con:

- entrada de texto
- reconocimiento de voz con `webkitSpeechRecognition`
- reproducción de respuestas con `SpeechSynthesis`
- diseño basado en Bootstrap
- comunicación con un endpoint del bot mediante `fetch`

El componente relevante es:

- `z_frontend/src/components/Chatbot.js`: lógica principal del chat y conexión con el bot
- `z_frontend/src/components/Navigation.js`: barra de navegación e integración de rutas

## Flujo de comunicación

1. El usuario escribe o dicta un mensaje desde la interfaz React.
2. La aplicación lo envía al endpoint REST de Rasa.
3. El bot interpreta el mensaje usando el modelo entrenado.
4. La respuesta se devuelve a la interfaz.
5. La UI muestra el mensaje y, si corresponde, lo reproduce en voz.

## Requisitos previos

- Node.js 18 LTS o superior
- npm
- Python 3.8 o 3.9 (recomendado para compatibilidad con Rasa 2.6.2)
- pip
- Docker y Docker Compose (opcional, para entorno contenedorizado)

## Instalación y ejecución

### Opción A: ejecutar el chatbot por separado

1. Crear y activar un entorno virtual:

```bash
cd Z_Django
python -m venv .venv
.venv\Scripts\activate
```

2. Instalar dependencias de Rasa:

```bash
cd Bot_Edison
pip install -r requirements.txt
```

3. Entrenar el modelo:

```bash
rasa train
```

4. Iniciar el servidor del bot:

```bash
rasa run --cors "*" --enable-api --model models
```

### Opción B: ejecutar la interfaz web

```bash
cd z_frontend
npm install
npm start
```

La aplicación quedará disponible normalmente en:

- http://localhost:3000

### Opción C: con Docker

Existe un `docker-compose.yaml` en la raíz del repositorio, pero en su estado actual apunta a un servicio `rasabot` que intenta compilar desde `./rasa`, carpeta que no existe en este proyecto. Por ello, la forma más fiable de ejecutar el sistema en este momento es hacerlo por separado con los comandos anteriores.

## Variables y endpoints relevantes

El frontend de `Chatbot.js` usa este endpoint para enviar mensajes al bot:

```js
https://chatbot-nofc.onrender.com/webhooks/rest/webhook
```

Esto indica que la interfaz actual se comunica con una instancia remota de Rasa desplegada en Render. Si se desea correr todo localmente, se deberá cambiar esta URL a la dirección del backend local.

## Notas de configuración actual

- El proyecto fue desarrollado como una app de asistente conversacional educativa.
- La vista principal del frontend está diseñada para presentar un chat con enfoque académico.
- La configuración de `docker-compose.yaml` parece ser un arranque inicial o una estructura preliminar y requiere ajuste para reflejar la organización real del repositorio.
- El archivo raíz `requirements.txt` parece corresponder a dependencias de Django heredadas o del entorno anterior, no al flujo principal del chatbot actual.

## Buenas prácticas de uso

- Mantener el modelo de Rasa entrenado antes de pruebas con preguntas reales.
- Revisar las respuestas en `domain.yml` para ajustar el tono y la información académica.
- Validar la conexión del frontend con el endpoint correcto antes de despliegue.
- En caso de cambiar el modelo o el servidor del bot, actualizar la URL del webhook en React.
