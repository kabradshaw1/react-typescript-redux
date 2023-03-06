from core.user.models import User
from core.order.models import Order
from rest_framework import serializers



class UserSerializer(serializers.ModelSerializer):
  order = serializers.PrimaryKeyRelatedField(many=True)
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'is_active', 'created', 'updated', 'orders']
    read_only_field = ['is_active', 'created', 'updated']