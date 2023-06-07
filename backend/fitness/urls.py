from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import ActiveViewSet, HeartViewSet, WeightViewSet, StepsViewSet, get_demo

routes = SimpleRouter()

routes.register(r'active', ActiveViewSet, basename='active')
routes.register(r'heart', HeartViewSet, basename='heart')
routes.register(r'weight', WeightViewSet, basename='weight')
routes.register(r'steps', StepsViewSet, basename='steps')

app_name = 'fitness'

urlpatterns = [
    path('', include(routes.urls)),
    path('demo/', get_demo, name='demo')
]