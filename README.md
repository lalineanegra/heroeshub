# Bienvenido a SuperHeroes App

## Instrucciones básicas

I. Descargue docker en https://www.docker.com/products/docker-desktop
II. Alternativamente descargue docker-compose en https://docs.docker.com/compose/install/

### Utilizando Docker

1. Utilizando la barra de comando, posicionarse en una carpeta del equipo destinada a albergar el proyecto

2. Utilizando Git Clonar el repo con los directorios HeroApp y HeroServer desde gitlab: 
	git clone git@gitlab.com:rodrigo.gtr/herohub.git

3. Con docker, crear las imagenes de cada applicación. Este proceso puede tardar unos minutos

	- Para Heroapp, posicionarse en el directorio raíz y ejecutar: docker build --tag heroapp:1.0 . (no olvidar el "." al final del comando)
	- Para HeroServer  posicionarse en el directorio raíz y ejecutar: docker build --tag heroserver:1.0 .

4. Levantar los containers de ambas imágenes:
	- Para Heroserver: docker run -d -p 5000:5000 heroserver:1.0
	- Para Heroapp: docker run -d -p 3000:80 heroapp:1.0
	
5. En barra de direccions del navegador, ingresar: localhost:3000

6. Disfruta de la app!

### Utilizando Docker-compose

1. Después de clonar el repo, posicionarse en el directorio raiz del proyecto, donde se encunetra el archivo docker-compose.yml

2. Ejecutar: docker-compose up --build

3. Cuando termine el proceso anterior, visita  localhost:3000

