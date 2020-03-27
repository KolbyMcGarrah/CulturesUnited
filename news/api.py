from .models import News
from rest_framework import viewsets, permissions
from .serializers import NewsSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset=News.objects.filter(active=True)
    serializer_class = NewsSerializer
    permissions = [
        permissions.IsAuthenticatedOrReadOnly
    ]