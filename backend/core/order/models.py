from django.db import models
from core.item.models import Item

class Order(model.Model):
  created = models.DateTimeField(auto_now_add=True)
  user = models.ManyToManyField(User)

  def __str__(self):
    return self.item
