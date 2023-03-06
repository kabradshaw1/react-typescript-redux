from rest_framework import serializers
from core.category.models import Category
from core.item.models import Item

class ItemSerializer(serializers.ModelSerializer):
  category = serializers.PrimaryKeyRelatedField()

  class Meta:
    model = Item
    fields = ['id', 'category_id', 'price', 'image', 'description', 'quantity', 'created', 'updated']