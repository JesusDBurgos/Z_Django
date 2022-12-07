from django.db import models

# Create your models here.

class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    Name = models.CharField("Nombre estudiante", max_length=100)

    Emotion_Select = (
        ('H', 'Happy'),
        ('S', 'Sad'),
        ('A', 'Angry'),
        ('N', 'Neutral'),
    )

    Emotion = models.CharField("Emoción", max_length=100, choices=Emotion_Select, default='N')
    Age = models.IntegerField("Edad", max_length=3)

    Gender_Select = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    gender = models.CharField("Sexo", max_length=1, choices=Gender_Select, default='M')
    CreatedAt = models.DateTimeField("Creado a", auto_now_add=True)

    
    def __str__(self):
        return self.Name
