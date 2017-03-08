### Instalar Atom en Linux
Atom es el editor de texto "hackeable" de GitHub, totalmente basado en tecnologías web.
Para poder instalarlo comenzamos con las dependencias básicas:

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install build-essential git libgnome-keyring-dev fakeroot
```

También instalaremos node.js ya que Atom depende de este entorno de programación en javascript:

```
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs
```

Para saber la versión de Node.js:
```
node -v
```

Node.js instalará npm automáticamente, para configurarlo:

```
npm config set python /usr/bin/python2 -g
```

Para instalar Atom abrimos un terminal y clonamos el código de Git:
```
git clone https://github.com/atom/atom
```

Cambiamos al directorio de Atom:

```
  cd atom  
 git fetch -p  
 git checkout $(git describe --tags `git rev-list --tags --max-count=1`)
```

Construimos Atom:
```
script/build
```

Ahora ya podemos ejecutar Atom. Otra opción es crear un archivo ejecutable .deb, lo hacemos con el siguiente comando:
```
script/grunt mkdeb
```
