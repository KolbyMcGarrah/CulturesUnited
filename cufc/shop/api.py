from rest_framework import viewsets, permissions, generics
from .models import Item
from .serializers import ItemSerializer, CartSerializer
from square.client import Client, CheckoutApi
from django.conf import settings
import uuid

class ItemViewSet(viewsets.ModelViewSet):
    permissions = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class CheckoutViewSet(generics.GenericAPIView):
    def post(self,request,*args, **kwargs):
        cart = CartSerializer(data=request.data)
        print(cart)
        checkout = client.checkout
        locationID = settings.SquareLocationID
        body = {}
        body['idempotency_key'] = uuid.uuid1()
        body['order'] = {}
        body['order']['order'] = {}
        body['order']['order']['location_id'] = locationID
        body['ask_for_shipping_address'] = True
        body['order']['order']['reference_id'] = 'reference_id'
        body['order']['order']['customer_id'] = 'customer_id'
        body['order']['order']['line_items'] = []