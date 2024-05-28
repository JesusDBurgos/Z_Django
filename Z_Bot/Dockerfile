# Utilizamos la imagen base de Rasa con la versión 2.6.2
FROM rasa/rasa:2.6.2

# Copiamos el modelo entrenado a la carpeta /app dentro del contenedor
COPY ./20231210-024010.tar.gz /app/model.tar.gz

# Exponemos el puerto 5005 para el servicio de Rasa
EXPOSE 5005

# Comando para iniciar el servidor de Rasa con el modelo cargado y opciones específicas
CMD ["run", "--cors", "\"*\"", "--enable-api", "-m", "/app/model.tar.gz"]
