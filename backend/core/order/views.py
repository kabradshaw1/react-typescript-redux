from core.order.models import Order
from core.order.serializers import OrderSerializer
from rest_framework import viewsets

class OrderViewSet(viewsets.ModelViewSet):
  serializer_class = OrderSerializer
  queryset = Order.objects.all()
