
## Hub

### ¿Qué es hub?

# **git + hub = github**

>hub is a command line tool that wraps git in order to extend it with extra features and commands that make working with GitHub easier.

Básicamente *hub* es una herramienta que nos facilita la interacción desde la línea de comandos con github, ésta es capaz de hacer todos aquellos procesos que haríamos desde la interfaz web de github, como por ejemplo crear un repositorio, eliminarlo, etc. Además nos provee de una sintaxis de fácil uso, ejemplo:

```
$ hub clone rtomayko/tilt

# expands to:
$ git clone git://github.com/rtomayko/tilt.git
```

Para instalar esta herramienta deberemos ejecutar los siguientes comandos:
```
$ git clone https://github.com/github/hub.git
$ cd hub
$ make install prefix=/usr/local
```
