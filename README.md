# 🌟 Proyecto Horóscopo Diario

Este es un proyecto de consulta de horóscopos según la fecha de nacimiento. Incluye un **frontend** en JavaScript y un **backend** en Django, ambos orquestados con **Docker y Docker Compose**.


---

## 🚀 ¿Cómo levantar el proyecto?

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/horoscopo-app.git
cd horoscopo-app
```
2. Construye y levanta los contenedores:

```bash
docker-compose up --build 
```

Esto levantará:

* El frontend en ``http://localhost``

* El backend (API Django) en ``http://localhost:8000``

# 🌐 ¿Cómo funciona?
* El usuario selecciona su fecha de nacimiento.

* El frontend hace una consulta al backend para obtener el signo zodiacal y el horóscopo del día.

* El backend responde con los datos, y se muestran en pantalla con un diseño atractivo.

# ⚙️ Configuraciones importantes
* El frontend utiliza Nginx para servir archivos estáticos.

* El backend tiene habilitado CORS para permitir la comunicación con el frontend.

* Puedes configurar el archivo default.conf de Nginx según tus necesidades.

# 📦 Requisitos
* Docker

* Docker Compose

# 🐳 Comandos útiles
Detener el proyecto:

```bash
docker-compose down
```
Ver logs:

```bash
docker-compose logs -f
```

¡Contribuciones, sugerencias y estrellas son bienvenidas! 🌟
