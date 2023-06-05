"""
Test for models.
"""
from django.test import TestCase

from user.models import User
from fitness import models

def create_user(username='testuser', email='user@example.com', password='testpass123'):
  """Create and return a new user."""
  return User.objects.create_user(username, email, password)

class ModelsTests(TestCase):
  """Test models."""

  def test_creating_fitness(self):
    """Test creating an active is successful."""
    user = create_user()
    active = models.Active.objects.create(qty=1, user=user, active=1)

    self.assertEqual(str(active), active.qty)