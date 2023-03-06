from rest_framework import serializers
from core.order.models import Order
from core.item.models import Item

class OrderSerializer(serializers.ModelSerializer):
  item = serializers.PrimaryKeyRelatedField(many=True)

  class Meta:
    model = Order
    fields = ['id', 'created', 'item']