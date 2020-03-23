from rest_framework import routers
from django.urls import path, include
from .api import ItemViewSet, CheckoutViewSet

router = routers.DefaultRouter()

router.register("api/shop/items", ItemViewSet, basename="items")

urlpatterns = router.urls