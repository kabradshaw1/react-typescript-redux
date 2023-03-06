from rest_framework.routers import SimpleRouter
from core.user.views import UserViewSet
from core.auth.views import LoginViewSet, RefreshViewSet, RegistrationViewSet
from core.category.views import CategoryViewSet
from core.order.views import OrderViewSet
from core.item.views import ItemViewSet

routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

routes.register(r'user', UserViewSet, basename='user')
routes.register(r'category', CategoryViewSet, basename='category')
routes.register(r'order', OrderViewSet, basename='order')
routes.register(r'item', ItemViewSet, basename='item')

urlpatterns = [
    *routes.urls
]