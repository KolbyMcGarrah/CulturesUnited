from .models import Player, Coach, Staff
from rest_framework import viewsets, permissions
from .serializers import PlayerSerializer, CoachSerializer, StaffSerializer

#Player Viewset

class PlayerViewSet(viewsets.ModelViewSet):
    queryset=Player.objects.all()
    serializer_class = PlayerSerializer
    permissions = [
        permissions.IsAuthenticatedOrReadOnly
    ]

class CoachViewSet(viewsets.ModelViewSet):
    queryset=Coach.objects.all()
    serializer_class = CoachSerializer
    permissions = [
        permissions.IsAuthenticatedOrReadOnly
    ]

class StaffViewSet(viewsets.ModelViewSet):
    queryset=Staff.objects.all()
    serializer_class = StaffSerializer
    permissions = [
        permissions.IsAuthenticatedOrReadOnly
    ]

