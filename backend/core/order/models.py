from django.db import models
from core.item.models import Item
from core.user.models import User

class Order(model.Model):
  item = models.ManyToManyField(Item)
  created = models.DateTimeField(auto_now_add=True)
  user = models.ManyToManyField(User)

  def __str__(self):
    return self.item
