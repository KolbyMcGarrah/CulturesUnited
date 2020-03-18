from django.db import models

class News(models.Model):
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=50,blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/news/', blank=True)
    added_on = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)
    active = models.BooleanField(default=True)