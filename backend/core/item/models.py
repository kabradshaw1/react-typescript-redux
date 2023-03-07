from django.db import models
from core.order.models import Order

class Item(models.Model):
  name = models.CharField(max_length=50, unique=True)
  price = models.DecimalField(required=True)
  image = models.CharField(max_length=100)
  description = models.textField(max_length=250)
  quantity = models.PositiveIntegerField(default=0)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  order = model.ManyToManyField(Order)

  def __str__(self):
    return self.name
