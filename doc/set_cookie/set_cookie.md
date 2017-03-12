# Set-Cookie

<div style="text-align:center"><img style="width:60%; height:60%" src="cookie.png"/></div>
<br>

## Sintáxis
El encabezado de HTTP Set-Cookie se utiliza para enviar cookies desde el servidor al usuario.

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax

// Multiple directives are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```
## Directivas

```
Directives<cookie-name>=<cookie-value>
```

Una cookie comienza con un par nombre-valor:
  * Un cookie-name puede ser cualquier cosa menos       caracteres de control (CTL) o espacios y pestañas. También no debe contener un carácter separador como el siguiente: () <> @,; : \ "/ []? = {}.

* Un cookie-value se puede establecer opcionalmente    entre comillas dobles y cualquier caracteres US-ASCII excluyendo CTLs, espacios en blanco, comillas dobles, coma, punto y coma y barra invertida son permitidos. Codificación: muchas implementaciones realizan codificación de URL en valores de cookie, sin embargo, no es necesario por la especificación RFC. Ayuda a satisfacer los requisitos sobre qué caracteres se permiten para <cookie-value> sin embargo.

* Secure- prefix: Las cookies con un nombre que empiece por Secure- (el guión es parte del prefijo) deben establecerse con el indicador seguro y deben ser de una página segura (HTTPS).

* Host- prefix: Las cookies con un nombre que empiece por Host- deben establecerse con el indicador seguro, deben ser de una página segura (HTTPS), no deben tener un dominio especificado (y por lo tanto no se envían a subdominios) y la ruta debe Ser "/".

## Ejemplos

### Session Cookies


* Las cookies de sesión se eliminarán cuando el cliente  se cierre. No especifican las directivas Expires o Max-Age. Tenga en cuenta que el navegador web ha habilitado a menudo la sesión de restauración.

 ```
  Set-Cookie: sessionid=38afes7a8; httponly; Path=/
 ```

 ## Permanent Cookie

En lugar de expirar cuando el cliente está cerrado, las cookies permanentes caducan en una fecha específica (Expires) o después de un período de tiempo específico (Max-Age)

 ```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
 ```

 ## Third party cookie

Una cookie de terceros pertenece a un dominio diferente del que se muestra actualmente en la barra de direcciones. Estas cookies generalmente se establecen mediante anuncios y abren el potencial para el seguimiento del historial de navegación del usuario.

 ```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk; Path=/; Expires=Wed, 30 Aug 2019 00:00:00 GM
 ```
 ## Cookie prefixes
Con los prefijos
Secure y Host- sólo se pueden utilizar si están configurados con la directiva de seguridad de un origen seguro (HTTPS). Además, las cookies con el prefijo Host- deben tener una ruta de acceso "/" (todo el host) y no un atributo de dominio. Para los clientes que no implementan prefijos de cookies, no puede contar con tener estas garantías adicionales y las cookies siempre serán aceptadas.

 ```
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure directive
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ directive (unless at root of the site)
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a domain
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
 ```
