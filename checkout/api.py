from rest_framework import viewsets, permissions, generics
from square.client import Client
from .serializers import CartSerializer
from django.conf import settings
from rest_framework.response import Response
import uuid

class CheckoutViewSet(generics.GenericAPIView):

    def post(self,request,*args, **kwargs):
        client = Client(
            access_token=settings.SQUARE_ACCESS_TOKEN,
            environment='sandbox',
        )
        cart = request.data
        checkout_api = client.checkout
        locationID = settings.SQUARE_LOCATION_ID
        body = {}
        body['idempotency_key'] = str(uuid.uuid1())
        body['order'] = {}
        body['order']['order'] = {}
        body['order']['order']['location_id'] = locationID
        body['ask_for_shipping_address'] = True
        body['order']['order']['reference_id'] = 'reference_id'
        body['order']['order']['customer_id'] = 'customer_id'
        body['order']['order']['line_items'] = []
        for num,item in enumerate(cart): 
            body['order']['order']['line_items'].append({})
            body['order']['order']['line_items'][num]['name'] = item['item'] + ' Size:' + item['size']
            body['order']['order']['line_items'][num]['quantity'] = item['quantity']
            body['order']['order']['line_items'][num]['note'] = item['size']
            body['order']['order']['line_items'][num]['base_price_money'] = {}
            body['order']['order']['line_items'][num]['base_price_money']['amount'] = int(float(item['price'])*100)
            body['order']['order']['line_items'][num]['base_price_money']['currency'] = 'USD'
        result = checkout_api.create_checkout(locationID, body)
        if result.is_success():
            return Response({
                "status":"success",
                "payload":result.body
            })
        else:
            return Response({
                "status":"error",
                "error_message":result.errors
            })