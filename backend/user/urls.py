from .views import UserViewSet
from rest_framework.routers import SimpleRouter
from django.urls import path

routes = SimpleRouter()

# USER
routes.register(r'user', UserViewSet, basename='user')

urlpatterns = [

]