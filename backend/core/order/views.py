from core.order.models import Order
from core.order.serializers import OrderSerializer
from rest_framework import viewsets

class OrderViewSet(viewsets.ModelViewSet):
  serializer_class = OrderSerializer
  
  def get_queryset(self):
    return Order.objects.all()
