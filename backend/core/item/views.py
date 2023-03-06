from rest_framework import viewsets
from core.item.models import Item
from core.item.serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
  serializer_class = ItemSerializer
  queryset = Item.objects.all()