# Utilizamos la imagen base de Rasa con la versión 2.6.2
FROM rasa/rasa:2.6.2

# Crear un usuario no root y darle permisos en el directorio de trabajo
USER root
RUN useradd -ms /bin/bash rasa
RUN chown -R rasa /app

# Cambiar al usuario recién creado
USER rasa

# Copiamos el modelo entrenado a la carpeta /app dentro del contenedor
COPY ./models/20240615-230952.tar.gz /app/models/

# Exponemos el puerto 5005 para el servicio de Rasa
EXPOSE 5005

# Comando para iniciar el servidor de Rasa con el modelo cargado y opciones específicas
CMD ["run", "--cors", "*", "--enable-api", "--model", "/app/models"]
