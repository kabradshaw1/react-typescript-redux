from django.urls import path
from .views import ItemList

app_name = 'store_api'

urlpatterns = [
  # path('item/<int:pk>/', ItemDetail.as_view(), name='detailcreate'),
  # path('item/', ItemList.as_view(), name='listcreate'),
]