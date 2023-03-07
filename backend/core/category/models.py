from django.db import models
from core.item.models import Item

class Category(models.Model):
  name = models.CharField(max_length=20, unique=True)
  item = models.ForeignKey(Item, related_name='category', on_delete=models.DO_NOTHING)

  def __str__(self):
    return self.name