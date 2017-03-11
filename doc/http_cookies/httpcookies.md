# HTTP COOKIES
<div style="text-align:center"><img style="width:60%; height:60%" src="cookie.png"/></div>
<br>

Una http cookie (cookie del navegador) es un pequeño fragmento de datos que un servidor envía al navegador web del usuario, puede almacenarlo y volverlo a enviar en con la siguiente petición al mismo servidor. Por lo general, se utiliza para saber si dos solicitudes procedían del mismo navegador, lo que permite mantener un usuario conectado, por ejemplo. Recuerda información de estado para el protocolo HTTP sin estado.

### Las cookies son usadas para 3 propósitos principales:

* Gestión de sesiones
* Personalización (preferencias del usuario)
* Seguimiento (análisis del comportamiento del usuario)

## Creando cookies

Al recibir una petición HTTP, un servidor puede enviar un encabezado Set-Cookie con la respuesta. La cookie normalmente se almacena en el navegador y, posteriormente, se envía el valor de la cookie junto con cada solicitud hecha al mismo servidor que tiene el contenido de un encabezado HTTP Cookie. Además, se puede especificar un retraso de caducidad así como restricciones a un dominio y una ruta específicos, limitando el tiempo y el sitio al que se envía la cookie.


* El encabezado de respuesta HTTP Set-Cookie se utiliza para enviar cookies desde el servidor al usuario. Una cookie sencilla se puede configurar de la siguiente manera:

  ```
  Set-Cookie: <cookie-name>=<cookie-value>
  ```


El servidor le dice al cliente que almacene una cookie (por ejemplo, aplicaciones como PHP, Node.js, Python o Ruby on Rails hacerlo). La respuesta enviada al navegador contendrá el encabezado Set-Cookie y el navegador almacenará la cookie.

  ```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
  ```


  Ahora, con cada nueva solicitud al servidor, el navegador enviará todas las cookies previamente almacenadas al servidor usando el encabezado Cookie.
  ```
  GET /sample_page.html HTTP/1.1
  Host: www.example.org
  Cookie: yummy_cookie=choco; tasty_cookie=strawberry
  ```

  ## Session cookies

  La cookie simple creada anteriormente es una cookie de sesión: Se eliminará cuando el cliente cierre sesión. No especifican ninguna directiva de caducidad o de antigüedad máxima. Los navegadores web a menudo tienen habilitada la restauración de sesiones, lo que hará que la mayoría de las cookies de sesión sean permanentes, como si el navegador nunca estuviera cerrado.

  ### Permanent cookies

 En lugar de expirar cuando el cliente está cerrado, las cookies permanentes caducan en una fecha específica o después de un período de tiempo específico (Max-Age).

  ```
 Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
   ```

## Scope of cookies


Las directivas de dominio y ruta definen el ámbito de la cookie, es decir, el conjunto de URLs a las que se deben enviar las cookies.

Si no se especifica, el valor predeterminado es la parte del host de la ubicación del documento actual (sin incluir los subdominios). Si se especifica un dominio, los subdominios siempre se incluyen.

Si se establece Domain = mozilla.org, las cookies se incluyen en subdominios como developer.mozilla.org.

Path indica una ruta de acceso de URL que debe existir en el recurso solicitado antes de enviar el encabezado de Cookie. El carácter% x2F ("/") se interpreta como un separador de directorios y los subdirectorios coincidirán también.

Si se establece Path = / docs, todos estos caminos coincidirán:

* "/ Docs",
* "/ Docs / Web /",
* "/ Docs / Web / HTTP"

## SameSite cookies

Las cookies de SameSite permiten a los servidores afirmar que no se debe enviar una cookie junto con las solicitudes entre sitios, lo que proporciona cierta protección contra los ataques de falsificación de solicitudes entre sitios (CSRF). Las cookies de SameSite son todavía experimentales y aún no son compatibles con todos los navegadores.

## JavaScript access using Document.cookies


También se pueden crear nuevas cookies con la propiedad Document.cookie y si no se establece el indicador HttpOnly, también se puede acceder a las cookies existentes desde JavaScript.

  ```
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
  ```

## Seguridad

Las cookies se utilizan a menudo en la aplicación web para identificar un usuario y su sesión autenticada. Así que robar una cookie de una aplicación web puede llevar a comprometer la sesión del usuario autenticado. Las maneras comunes de robar cookies incluyen el uso de la ingeniería social o explotando una vulnerabilidad XSS en la aplicación.
