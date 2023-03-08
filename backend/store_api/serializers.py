from rest_framework import serializers
from .models import Items, Order, Category

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
