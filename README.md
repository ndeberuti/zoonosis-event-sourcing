# Zoonosis Event Sourcing

Este proyecto es un ejemplo de aplicación del patrón 'Event Sourcing' (que permite guardar los cambios en una aplicación como una secuencia de eventos), utilizando un caso de zoonosis.


## Pre-requisitos

1) Para poder ejecutar el código es necesario instalar 'Node.Js'. Se puede descargar la última versión desde el siguiente link:

      https://nodejs.org/es/download/


2) Es necesario instalar 'MongoDB' para disponer de una base de datos local para el proyecto. Las diferentes versione se pueden encontrar en el siguiente link:

      https://www.mongodb.com/try/download/community


3) Se requiere también un cliente REST para poder ejecutar las pruebas. Recomendamos utilizar 'Postman', el cual se puede descargar desde el siguiente link:

      https://www.postman.com/downloads/
      

## Configuración y ejecución

Luego de instalar las herramientas descritas anteriormente y de descargar el proyecto, es necesario configurarlo para que este pueda ejecutarse correctamente.

1) El primer paso será agregar la configuración para que nuestra aplicación pueda conectarse a un domino que contenga una base de datos de MongoDB con el nombre 'zoonosis'. 
    
    * Para ello debemos dirigirnos a la carpeta 'config' (dentro de la carpeta que contiene el proyecto que descargamos) y editar el archivo 'default.json'    
    
      ![image](https://i.imgur.com/bjPM5wL.png)     
    
    * Dentro de este archivo, en la sección 'db' deberemos ingresar los datos correspondientes al dominio en el que se encuentra nuestra base de datos
      
      ![image](https://imgur.com/jbBVKia.png)
      
2) Luego, deberemos abrir el directorio del proyecto dentro de una instancia de la terminal y ejecutar los siguientes comandos:

    ![image](https://imgur.com/WzHZ93S.png)
    
    ![image](https://imgur.com/qfWhMfm.png)
    
    Este último comando permitirá que nuestra aplicación se ejecute.
    
## Endpoints

A continuación se presenta una lista de los endpoints de la aplicación, los cuales nos permitirán realizar pruebas:

* [GET] **/event/\<idEvento\>** --> Da información de un evento particular

* [GET] **/event** --> Da información de todos los eventos

* [POST] **/event** --> Permite ingresar un evento

* [GET] **/region/\<idRegion\>** --> Obtiene la proyeccion de una region

* [GET] **/region/\<idRegion\>/upTo/\<idEventoHasta\>** --> Obtiene proyecciones deel 'id' de region indicado ('idRegion) hasta un evento máximo ('idEventoMax')

Para poder acceder a estos endpoints se aconseja utilizar un cliente REST como 'Postman'
