Este proyecto es una aplicación de lista de mascotas creada con React y Redux. Permite a los usuarios agregar y listar mascotas a través de un formulario.

Estructura de carpetas
La estructura de carpetas del proyecto es la siguiente:

src/components: Contiene los componentes de React utilizados en la aplicación.
ListPets.jsx: Componente que muestra la lista de mascotas.
NewPetForm.jsx: Componente que contiene el formulario para agregar una nueva mascota.
PetCard.jsx: Componente que representa a una mascota individual en la lista de mascotas.
src/features/pets: Contiene la lógica de Redux para el manejo del estado de las mascotas.
petsSlice.js: Define el slice de Redux para las mascotas, incluyendo los reducers y las acciones.
src/pages/pets: Contiene las páginas de la aplicación.
create.jsx: Página para agregar una nueva mascota.
list.jsx: Página que muestra la lista de mascotas.
src/store: Contiene la configuración de la tienda Redux.
index.js: Configura y exporta la tienda Redux.
src/App.jsx: Componente principal de la aplicación.

Para correr el proyecto en tu entorno local, sigue estos pasos:

Clona el repositorio en tu máquina local.

Navega hasta el directorio del proyecto.

Instala las dependencias del proyecto con npm. Ejecuta el siguiente comando en la terminal:

Una vez que todas las dependencias estén instaladas, puedes iniciar el servidor de desarrollo ejecutando:
Abre tu navegador y visita http://localhost:5000 (o el puerto que tu consola te indique) para ver la aplicación en funcionamiento.
Recuerda que debes tener Node.js y npm instalados en tu máquina para poder seguir estos pasos.
