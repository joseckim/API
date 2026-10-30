# Super API

API desarrollada con Node.js y Express para manejar pruebas básicas de autenticación y endpoints de salud.

## Descripción

Este proyecto sirve como base para una API REST con arquitectura simple en capas:

- `app.js`: configuración principal de la aplicación
- `src/routes`: definición de rutas
- `src/controllers`: lógica de controladores
- `src/models`: modelos de datos (preparados para extensión)

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

1. Clona el repositorio.
2. Entra a la carpeta del proyecto:

```bash
cd API-
```

3. Instala las dependencias:

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
APP_PORT=3000
```

> El puerto debe ser un número entero válido entre 1 y 65535.

## Ejecución

Modo normal:

```bash
npm start
```

Modo desarrollo con reinicio automático:

```bash
npm run dev
```

La aplicación se ejecutará en el puerto configurado en `APP_PORT`.

## Endpoints

### GET /test/hello

Responde con un mensaje de confirmación.

Ejemplo:

```bash
curl http://localhost:3000/test/hello
```

Respuesta:

```json
{
  "message": "La API esta bien"
}
```

### GET /test/hello/:abc

Devuelve un saludo personalizado con el valor recibido en la URL.

Ejemplo:

```bash
curl http://localhost:3000/test/hello/Juan
```

Respuesta:

```json
{
  "message": "Hola Juan"
}
```

### POST /auth

Endpoint básico de autenticación.

Ejemplo de uso:

```bash
curl -X POST http://localhost:3000/auth \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "123456"
  }'
```

Respuesta:

```json
{
  "message": "Login exitoso",
  "data": {
    "email": "usuario@ejemplo.com",
    "password": "123456"
  }
}
```

Si faltan `email` o `password`, la API responde con un error `400`.

## Estructura del proyecto

```text
API-
├── app.js
├── package.json
├── package-lock.json
├── .env
├── README.md
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── test.controller.js
│   ├── models/
│   └── routes/
│       ├── auth.route.js
│       └── test.route.js
└── .gitignore
```

## Notas

Este proyecto está pensado como base para luego expandirse con:

- validaciones más robustas
- autenticación JWT
- conexión a base de datos con Sequelize/PostgreSQL
- estructura modular más avanzada
- manejo centralizado de errores

## Licencia

ISC
