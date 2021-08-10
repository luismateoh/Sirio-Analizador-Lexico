# Sirio · Analizador Léxico

Sirio pretende ser un analizador léxico el cual mediante expresiones regulares y autómatas finitos lee alguna una entrada (código fuente de un programa)  y genera una lista ligada o array de tokens. Estos tokens se componen de la siguiente manera: un atributo que identifica el tipo del token y el lexema o valor del token.

:blue_book: [Documento sobre el proceso del analixis lexico que realiza sirio](https://www.notion.so/luismateoh/Sirio-Analizador-L-xico-14498473d3b24697b760bec59667e772)

:blue_book: [Manual de usuario](https://www.notion.so/luismateoh/Manual-de-usuario-cf75556ce70149b396b4faf58c625c75)

:blue_book: [Manual técnico](https://www.notion.so/luismateoh/Sirio-Manual-t-cnico-32dcf7383d1248bb9a5d0a2a9e673d49)

El lenguaje que Sirio podrá analizar será Dart; un lenguaje de código abierto desarrollado en Google con el objetivo de permitir a los desarrolladores utilizar un lenguaje orientado a objetos con análisis de tipo estático.

Podrá reconocer las siguientes categorias léxicas:
1. Cadenas de texto
2. Palabras reservadas
3. Identificadores
4. Constantes numéricas
5. Operadores
6. Separadores

Para acceder a sirio siga:
[https://luismateoh.github.io/Sirio-Analizador-Lexico/](https://luismateoh.github.io/Sirio-Analizador-Lexico/)

![Imgur](https://i.imgur.com/vShpfAX.png)

Realizar los siguientes pasos para ejecutar Sirio.
Recordar que antes de eso se debe tener instalado *[Node.js](https://nodejs.org/es/) (v14.17.0), con [Yarn](https://yarnpkg.com/) (v1.22.10).*

Clonar el repositorio desde: [https://github.com/luismateoh/Sirio-Analizador-Lexico](https://github.com/luismateoh/Sirio-Analizador-Lexico)

```bash
git clone https://github.com/luismateoh/sirio
```

Entrar a la carpeta del repositorio clonado.

```bash
cd .\sirio\
```

Instalar las librerías.

```bash
yarn install
```

Correr el servidor de forma local.

```bash
yarn start
```

Si el puerto 3000 esta disponible la aplicación se puede abrir desde `http://localhost:3000/sirio`.
