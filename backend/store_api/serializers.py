from rest_framework import serializers
from store.models import Item, Order, Category

class CategorySerializer(serializers.ModelSerializer):
  item = serializers.StringRelatedField()
  class Meta:
    model = Category
    fields = ['id', 'name', 'item']

class ItemSerializer(serializers.ModelSerializer):

  class Meta:
    model = Item
    fields = ['id', 'name', 'price', 'image', 'description', 'quantity', 'created', 'updated']

class OrderSerializer(serializers.ModelSerializer):

  class Meta:
    model = Order
    fields = ['ordered_items', 'user', 'created', 'updated']
