from django.urls import path, include
from .api import CheckoutViewSet

urlpatterns = [
    path('api/checkout/', CheckoutViewSet.as_view()),
]