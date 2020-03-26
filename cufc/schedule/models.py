from django.db import models

# Create your models here.
class Game(models.Model):
    opponent = models.CharField(max_length=50)
    Location = models.CharField(max_length=50)
    Date = models.DateField()
    Time = models.DateTimeField()
    Our_Score = models.PositiveIntegerField()
    Their_Score = models.PositiveIntegerField()
    Game_Type = models.CharField(max_length=50)
    