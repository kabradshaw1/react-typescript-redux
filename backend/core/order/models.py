from django.db import models
from core.item.models import Item

class Order(model.Model):
  items = models.ManyToManyField(Item)
  created = models.DateTimeField(auto_now_add=True)
