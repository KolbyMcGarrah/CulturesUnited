from rest_framework import routers
from .api import PlayerViewSet, CoachViewSet, StaffViewSet

router = routers.DefaultRouter()

router.register("api/players", PlayerViewSet, basename="players")
router.register("api/coaches", CoachViewSet, basename="coaches")
router.register("api/staff", StaffViewSet, basename="staff")

urlpatterns = router.urls
