from django.db import models
from user.models import User

class Demo(models.Model):
  """Demo object."""
  active = models.IntegerField()
  heart = models.IntegerField()
  weight = models.IntegerField()
  steps = models.IntegerField()
  created = models.DateTimeField()

  def __str__(self):
    return f'{self.active}'

class Active(models.Model):
  """Active object."""
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'

class Heart(models.Model):
  """Heart object."""
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'

class Steps(models.Model):
  """Steps object."""
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'

class Weight(models.Model):
  """Weight object."""
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f'{self.qty}'