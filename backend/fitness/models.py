from django.db import models
from user.models import User

class Demo(models.Model):
  active = models.IntegerField()
  heart = models.IntegerField()
  weight = models.IntegerField()
  steps = models.IntegerField()

  def __str__(self):
    return f'{self.active}'

class Active(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'


class Heart(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'

class Steps(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'

class Weight(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'