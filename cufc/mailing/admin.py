from django.contrib import admin
from .models import emailList, bulkEmail, contactEmails

# Register your models here.
admin.site.register(emailList)
admin.site.register(bulkEmail)
admin.site.register(contactEmails)