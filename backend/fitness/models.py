from django.db import models
from user.models import User

class Active(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  qty = models.IntegerField()
  created = models.DateTimeField(auto_now_add=True)