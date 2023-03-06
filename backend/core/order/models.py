from django.db import models
from core.item.models import Item

class Order(model.Model):
  item = models.ManyToManyField(Item)
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.item
