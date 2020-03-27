from rest_framework import routers
from .api import NewsViewSet

router = routers.DefaultRouter()

router.register("api/news", NewsViewSet, basename="news")

urlpatterns = router.urls
