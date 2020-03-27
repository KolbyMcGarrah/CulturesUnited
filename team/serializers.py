from rest_framework import serializers
from .models import Player, Coach, Staff

class PlayerSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Player
        fields = "__all__"

class CoachSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Coach
        fields = "__all__"

class StaffSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Staff
        fields = "__all__"