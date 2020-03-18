from rest_framework import viewsets, permissions
from .models import Item
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    permissions = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Shop.objects.all()
    serializer_class = ItemSerializer