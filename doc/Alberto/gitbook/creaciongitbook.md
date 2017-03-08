
### Inicio de sesión en Gitbook
Para el inicio de sesión de manera online es necesario que se tenga previamente una cuenta en alguno de éstos soportes: **Twitter**, **Facebook**, **Google+** o **Github**.

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gitbooksesion.png"/></div>

En mi caso es recomendable el inicio de sesión mediante Github, ya que su sincronización directa con los repositorios puede dar lugar a una mayor facilidad de uso y ventajas.

### Creación de un libro en Gitbook
Cuando se inicia sesión por primera vez, aparecerá la siguiente imagen con la que se puede escoger que tipo de libro queremos crear.

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gitbookinicio.png"/></div>

Existen varias maneras de crear e introducir contenido en un libro gitbook:

* Mediante **importación de archivos** (pdf, epub, html, etc).

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gitbookimportar.png"/></div>

* Mediante **sincronización de repositorio con Github**.

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gitbookgithub.png"/></div>

* Mediante **Creación de un repositorio gitbook**.
Otra de las posibilidades para el despliegue de un libro en gitbook es la creación de un repositorio en el mismo, en el que subiremos todos los archivos remotamente.
Para ello será necesaria la instalación de la herramienta **gitbook** en Linux, ésta puede ser instalada de la siguiente forma:
```
sudo npm install gitbook-cli -g
```
Una vez instalados los recursos, se podrá inicializar un libro con el formato gitbook:
```
gitbook init <nombre_libro>
```
Ésto nos creará una estructura de archivos, básicamente el README.md y SUMMARY.md.

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gbinit.png"/></div>

Además gitbook nos proporciona el siguiente comando para visualizar el progreso de nuestro libro en modo servidor por el puerto correspondiente a través de nuestro navegador:
```
gitbook serve
```

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gbserve.png"/></div>

Por último, gitbook también nos ofrece la posibilidad de convertir nuestro libro en diferentes formatos, html, pdf, ebook, etc.
```
gitbook build
```
En el caso de la creación del formato html, se nos creará un directorio adicional denominado *_book*, donde se alojarán todos los ficheros de la website.

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gbbuild.png"/></div>

Por lo que si queremos finalmente subir nuestro repositorio local a uno remoto (en gitbook en este caso), y publicarlo con la metodología de Markdown, se deberá añadir la dirección de dicho repositorio remoto para luego empujarlo hacia gitbook:
```
git remote add alias <direccion_repo_remoto_gitbook>
git push alias master
```


En gitbook, al igual que en github también consta de ramas y confirmaciones. Esta información está disponible en el apartado **update** del libro en cuestión, a continuación se puede ver un ejemplo de ello.

<div style="text-align:center"><img style="width:70%; height:70%" src="images/gitbookcommit.png"/></div>
