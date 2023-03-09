from rest_framework
from store.models import Item, Order, Category,
from .serializers import ItemSerializer, OrderSerializer, CategorySerializer

class ItemList(generics.ListCreateAPIView):
  queryset = Item.objects.all()
  serializer_class = ItemSerializer
  pass
