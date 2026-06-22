Git init
Descripción: Inicializa un nuevo repositorio de Git en el diretorio actual
Ejemplo de caso de uso: Querer empezar a trabajar con las versiones de un nuevo proyecto que tenemos en una carpeta local.

Git clone
Descripción: Crea una copia local de un repositorio remoto
Ejemplo: Entrar a un nuevo proyecto en una empresa y necesitamos descargar el codigo base desde github a nuestra computadora

Git status
Descripción: Muestra el estado del directorio de trabajo 
Ejemplo: Querer verificar qué archivos has modificado y cuáles están listos para ser guardados

Git add 
Descripción: Añade los camnbios de nuestros archivos en el area de preparación
Ejemplo: Terminamos de editar el archivo index.html y queremos perpararlo para nuestro proximo commit. (git add index.html)

Git commit
Descripción: Guardar una captura permanente de los archivos preparados en el historial de versiones
Ejemplo: Despues de terminar una tarea y queremos guardar esos cambios con un mensaje descriptivo (git commit -m "Corregir logica de botón de login")

git push
Descripción: Sube los commits locales al repositorio remoto
Ejemplo: Queremos que nuestros compañeros de equipo puedan ver y utilizar el código que acabamos de terminar y guardar localmente (git push origin.main)

git pull
Descripción: Trae los cambios del repositorio remoto y los fusiona (merge) automaticamente con nuestra rama actual
Ejemplo: Suponiendo que vamos a empezar a trabajar por la mañana y necesitamos actualizar nuestro codigo local con lo que nuestro equipo el dia anterior

git branch 
Descripción: Lista, crea o elimina ramas (branches)
Ejemplo: Queremos eliminar una funcion sin afectar la versión estable del proyecto

git checkout / git switch
Descripción: Cambia entre diferentes ramas en nuestro repositorio
Ejemplo: Necesitamos dejar de trabajar en la nueva funcionalidad y volver a la rama principal para revisar algo 

git merge
Descripción: Combina el historial de una rama independiente en nuestra rama actual.
Ejemplo de caso de uso: Terminamos nuestra nueva funcionalidad en una rama aparte y ahora queremos integrarla definitivamente a la rama principal.

git log
Descripción: Muestra el historial completo de commits realizados en nuestra rama actual.
Ejemplo de caso de uso: Necesitamos saber quién de nosotros hizo el último cambio en el proyecto o buscar un commit específico de la semana pasada.

git diff
Descripción: Muestra las diferencias exactas de código entre commits, ramas o nuestro estado actual.
Ejemplo de caso de uso: Queremos revisar línea por línea qué fue exactamente lo que modificamos antes de ejecutar git add.

git remote
Descripción: Administra las conexiones con repositorios remotos.
Ejemplo de caso de uso: Creamos un proyecto localmente y ahora queremos vincularlo con un repositorio vacío que acabamos de crear en la nube para empezar a subirlo.

git fetch
Descripción: Descarga el historial y los cambios del remoto, pero no los fusiona con nuestro código actual.
Ejemplo de caso de uso: Queremos ver en qué han estado trabajando nuestros compañeros, pero sin que esos cambios alteren los archivos en los que estamos trabajando en este momento.

git stash
Descripción: Guarda temporalmente los cambios no confirmados y limpia nuestro directorio de trabajo.
Ejemplo de caso de uso: Estamos a mitad de programar una función, nos piden arreglar un bug urgente, y necesitamos cambiar de rama sin tener que hacer un commit de nuestro trabajo incompleto.

git stash pop
Descripción: Restaura los últimos cambios que guardamos con stash y los elimina de la memoria temporal.
Ejemplo de caso de uso: Ya arreglamos el bug urgente, regresamos a nuestra rama y queremos retomar el código incompleto exactamente donde lo habíamos dejado.

git reset
Descripción: Deshace commits locales moviendo la referencia hacia atrás en nuestro historial.
Ejemplo de caso de uso: Hicimos un commit por accidente con archivos incorrectos o incompletos y queremos deshacer ese commit, pero manteniendo nuestros cambios en los archivos locales para corregirlos.

git revert
Descripción: Crea un nuevo commit que deshace los cambios realizados en un commit anterior.
Ejemplo de caso de uso: Un código que ya subimos a producción está causando errores y necesitamos revertir esos cambios específicos sin borrar el historial público del equipo.

git rm
Descripción: Elimina archivos de nuestro directorio de trabajo y del índice de Git simultáneamente.
Ejemplo de caso de uso: Queremos borrar un archivo de configuración o una imagen vieja que ya no usamos, y asegurarnos de que Git registre y confirme esa eliminación en el próximo commit.

git tag
Descripción: Crea marcas o etiquetas en puntos específicos del historial.
Ejemplo de caso de uso: Terminamos el desarrollo de la primera versión estable de nuestro sistema y queremos marcar ese commit de forma permanente para el futuro. (git tag v1.0.0)

