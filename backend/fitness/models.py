from django.db import models
from user.models import User

class Active(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'


class Heart(models.Model):
  pass

class Distance(models.Model):
  pass

class Steps(models.Model):
  pass

class Weight(models.Model):
  pass