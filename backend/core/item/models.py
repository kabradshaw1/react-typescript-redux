from django.db import models
from core.category.models import Category

class Item(models.Model):
  name = models.CharField(max_length=50)
  category_id = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
  price = models.PositiveIntegerField(required=True)
  image = models.CharField(max_length=100)
  description = models.textField(max_length=250)
  quantity = models.PositiveIntegerField(default=0)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
