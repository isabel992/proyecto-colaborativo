## PARTE FRANCISCO JAVIER HH
### PARTE DE JAVA SCRIPT
Este script es útil para tareas en segundo plano como monitoreo, registro de actividad o preparación de datos sin impacto visual 
- **Ejecución automática**: Se activa cuando el DOM está completamente cargado.
- **Registro en consola**: Cada 10 segundos imprime un mensaje en la consola.
- **Almacenamiento en `localStorage`**: Guarda un valor en el almacenamiento local.
- **No interfiere con el diseño**: No modifica la interfaz ni la experiencia del usuario.

### USO
1. Incluir el archivo `mijava.js` en el HTML con `<script src="javascript/mijava.js"></script>` (o copiar la ruta del archivo).
2. Abrir la página en un navegador.
3. Revisar la consola (`F12` → Consola) para ver los mensajes.

### PROCESO
#### CONECTARSE AL REPOSITORIO Y CREAR RAMAS
Para empezar, nos conectaremos con el repositorio de la manera **git clone** una vez clonado vemos que el proyecto se ha copiado en el directorio donde estaríamos ubicados en este caso el Escritorio (Desktop)<br>
![alt text](image.png)


Para asegurarnos de que estamos correctamente conectados al repositorio usaremos el comando **git remote -v** introducidos en el directorio del proyecto <br>
![alt text](<img/Captura de pantalla 2025-03-02 014920.png>)


Si queremos verificar en que rama estamos, lo haremos por medio de **git branch** la cual nos dirá la rama exacta
![alt text](<img/Captura de pantalla 2025-03-02 015206.png>)<br>
En este caso estamos en el **main** porque de momento no hemos creado ninguna rama

Lo siguiente que haremos será crear una rama (**Branch**) con el comando **git branch** en este caso será mi nombre <br>
![alt text](<img/Captura de pantalla 2025-03-02 015946.png>)


Con este comando creamos la rama, pero todavía no estamos dentro, para ello usaremos el comando **git checkout** “nombre de la rama”<br> 
![alt text](<img/Captura de pantalla 2025-03-02 020419.png>)<br>
De esta forma vemos en la rama en la que estamos viendo el paréntesis azul sino usaremos de nuevo git branch<br>
![alt text](<img/Captura de pantalla 2025-03-02 020533.png>)


#### CREACIÓN DE LA PARTE DE ARCHIVOS
Lo primero vamos a crear una carpeta llamada “javascript” con el comando **mkdir** _“nombre del directorio”_<br>
![alt text](<img/Captura de pantalla 2025-03-02 021516.png>)<br>

Dentro del directorio vamos a crear un archivo llamado mijava.js el cual crearemos con el comando **touch**<br>
![alt text](<img/Captura de pantalla 2025-03-02 021952.png>)

Ahora vamos a abrir el archivo con Visual Studio Code para editar el archivo, lo haremos con el comando **code** <br>
![alt text](<img/Captura de pantalla 2025-03-02 023626.png>)<br><br>
![alt text](<img/Captura de pantalla 2025-03-02 023900.png>)

Después vamos a introducir código en el archivo y lo guardamos (**Ctrl + s**)<br>
![alt text](<img/Captura de pantalla 2025-03-02 024104.png>)

#### GUARDAR LOS CAMBIOS E INTRODUCIRLOS AL REPOSITORIO

Lo primero añadiremos el archivo modificado a Git para prepararlo para el commit, para ello usaremos **git add**<br>
![alt text](<img/Captura de pantalla 2025-03-02 024615.png>)

Después del anterior paso haremos el commit del archivo mediante el comando **git commit -m**<br>
![alt text](<img/Captura de pantalla 2025-03-02 025650.png>)<br>
Para ver si el commit se ha realizado correctamente teclearemos **git log –oneline** en los que veremos el commit además de diferentes cambios en el proyecto<br>
![alt text](<img/Captura de pantalla 2025-03-02 030044.png>)

Además, si queremos ver el contenido del commit podemos usar el comando **git show _ID del commit_**. El ID del commit lo podríamos observar en el anterior comando (git log) el cual sale en la parte amarilla de la izquierda. En el caso de este commit el ID seria ec5cb13<br>
![alt text](<img/Captura de pantalla 2025-03-02 030556.png>)

Después, subiremos los cambios de la rama a GitHub a través del comando **git push origin _nombre de la rama_** 
![alt text](<img/Captura de pantalla 2025-03-02 033623.png>)
