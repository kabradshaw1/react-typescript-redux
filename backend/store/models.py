from django.db import models
from django.contrib.auth.models import User
'''
not really sure I think there is any reason to have a category at this point 
I could just as easily have this as a property in the items class.  I guess 
I'll leave it in here for practice
'''
class Category(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
    return self.name

class Item(models.Model):

  # options = (
  #   'Food',
  #   'Household Supplies',
  #   'Electronics',
  #   'Books',
  #   'Toys',
  # )

  # category = models.CharField(max_length=20, choices=options)
  category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
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
  
  class UserOrder(models.manager):
    return super().get_queryset().filter()

  item = models.ManyToManyField(Item)
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='order')
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  user_objects = UserOrder()
  objects = models.Manager()

  def __str__(self):
    return self.id
