"""
URL mapping for the user app.
"""

from .views import UserViewSet, LoginViewSet, RegistrationViewSet, RefreshViewSet
from rest_framework.routers import SimpleRouter
from django.urls import path, include

routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
routes.register(r'user', UserViewSet, basename='user')

app_name = 'user'

urlpatterns = [
  path('', include(routes.urls))
]