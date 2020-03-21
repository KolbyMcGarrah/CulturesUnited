from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('',include('frontend.urls')),
    path('',include('team.urls')),
    path('',include('news.urls')),
    path('',include('shop.urls')),
    path('admin/', admin.site.urls),
]
