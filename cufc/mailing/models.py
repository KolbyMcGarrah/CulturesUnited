from django.db import models

# Create your models here.
class emailList(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    active = models.BooleanField(default=True)
    added_on = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)

class bulkEmail(models.Model):
    subject = models.CharField(max_length=50)
    body = models.TextField()
    send_date = models.DateField()
    picture = models.ImageField(upload_to='images/emails')
    added_on = models.DateField(auto_now_add=True)
    last_udpated = models.DateField(auto_now=True)

class contactEmails(models.Model):
    subject = models.CharField(max_length=50)
    body = models.TextField()
    name = models.CharField(max_length=50)
    cellPhone = models.CharField(max_length=10, null=True, blank=True)
    added_on = models.DateField(auto_now_add=True)
    seen = models.BooleanField(default=False)