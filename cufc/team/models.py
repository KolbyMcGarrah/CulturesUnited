from django.db import models

# Create your models here.
'''
Player model holds the information for the current players on the roster. This will record game
stats as well as personal information.
'''
class Player(models.Model):
    name = models.CharField(max_length=70)
    home = models.CharField(max_length=70, null=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    description = models.TextField(null=True)
    position = models.CharField(max_length=50)
    appearences = models.PositiveIntegerField(default=0)
    goals = models.PositiveIntegerField(default=0)
    assists = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='images/players/', blank=True)
    active = models.BooleanField(default=True)
    created_on = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)
'''
Coach model holds the information for the current coaches on the team.
'''
class Coach(models.Model):
    name = models.CharField(max_length=70)
    home = models.CharField(max_length=70, null=True)
    title = models.CharField(max_length=50, null=True)
    description = models.TextField(null=True)
    image = models.ImageField(upload_to='images/coaches/')
    active = models.BooleanField(default=True)
    created_on = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)
'''
Staff model holds the information for the current non-coaching staff.
'''
class Staff(models.Model):
    name = models.CharField(max_length=70)
    home = models.CharField(max_length=70, null=True)
    description = models.TextField(null=True)
    title = models.CharField(max_length=50, null=True)
    image = models.ImageField(upload_to='images/staff/')
    active = models.BooleanField(default=True)
    created_on = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)