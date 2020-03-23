from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class CartItemSerializer(serializers.Serializer):
        quantity = serializers.IntegerField()
        item = serializers.CharField()
        size = serializers.CharField()
        price = serializers.DecimalField(max_digits=7, decimal_places=2)
        img = serializers.CharField()

class CartSerializer(serializers.Serializer):
    cart_item = CartItemSerializer(many=True)
    