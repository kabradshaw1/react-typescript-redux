from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView
)

urlpatterns = [
    path('static/admin/', admin.site.urls),
    path('api/store/', include('store.urls', namespace='store')),
    path('api/fitness/', include('fitness.urls', namespace='fitness')),
    path('api/user/', include('user.urls', namespace='user')),
    path('api/schema/', SpectacularAPIView.as_view(), name='api-schema'),
    path(
        'static/docs/',
        SpectacularSwaggerView.as_view(url_name='api-schema'),
        name='api-docs',
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
