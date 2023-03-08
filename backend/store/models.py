from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
    return self.name

class Item(models.Model):

  category = models.ForeignKey(Category, related_name='item', on_delete=models.PROTECT, default=1)
  name = models.CharField(max_length=50, unique=True)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  image = models.CharField(max_length=100)
  description = models.TextField(max_length=250)
  quantity = models.PositiveIntegerField(default=0)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
  
class Order(models.Model):

  item = models.ManyToManyField(Item)
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='order')
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.id
