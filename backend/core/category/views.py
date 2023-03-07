from rest_framework import viewsets
from core.category.serializers import CategorySerializer
from core.category.models import Category

class CategoryViewSet(viewsets.ModelViewSet):
  serializer_class = CategorySerializer
  
  def get_queryset(self):
    return Category.objects.all()
