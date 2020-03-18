from rest_framework import routers
from .api import ItemViewSet

router = routers.DefaultRouter()

router.register("api/shop/items", ItemViewSet, basename="items")

urlpatterns = router.urls