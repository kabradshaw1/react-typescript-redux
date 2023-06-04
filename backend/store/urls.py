from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from store.views import ItemViewSet, OrderViewSet, CategoryViewSet, checkout, health_check

routes = SimpleRouter()

# api
routes.register(r'item', ItemViewSet, basename='item')
routes.register(r'category', CategoryViewSet, basename='category')
routes.register(r'order', OrderViewSet, basename='order')

app_name = 'store'

urlpatterns = [
    path('', include(routes.urls)),
    path('checkout/', checkout, name='checkout'),
]