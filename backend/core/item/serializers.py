from rest_framework import serializers
from core.item.models import Item

class ItemSerializer(serializers.ModelSerializer):
  category = serializers.StringRelatedField()

  class Meta:
    model = Item
    fields = ['id', 'category', 'price', 'image', 'description', 'quantity', 'created', 'updated']