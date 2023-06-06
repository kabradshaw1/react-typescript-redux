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

  def test_creating_active(self):
    """Test creating an active is successful."""
    user = create_user()
    active = models.Active.objects.create(qty=1, user=user)

    self.assertEqual(str(active), str(active.qty))

  def test_creating_heart(self):
    """Test creating an heart is successful."""
    user = create_user()
    heart = models.Heart.objects.create(qty=1, user=user)

    self.assertEqual(str(heart), str(heart.qty))

  def test_creating_steps(self):
    """Test creating an steps is successful."""
    user = create_user()
    steps = models.Steps.objects.create(qty=1, user=user)

    self.assertEqual(str(steps), str(steps.qty))

  def test_creating_weight(self):
    """Test creating an weight is successful."""
    user = create_user()
    weight = models.Weight.objects.create(qty=1, user=user)

    self.assertEqual(str(weight), str(weight.qty))