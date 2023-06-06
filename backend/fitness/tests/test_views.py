from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from user.models import User

class FitnessAPITests(APITestCase):
  user = User.objects.create_user(username='testuser2', email='testuser2@example.com', password='testpass')
  base_url_demo = reverse("demo-list")
  base_url_active = reverse("active-list")
  base_url_heart = reverse("heart-list")
  base_url_steps = reverse("steps-list")
  base_url_weight = reverse("weight-list")
  data = {
    "qty": "1"
  }

  def test_get_demo(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.get(f"{self.base_url_demo}")
    self.assertEqual(response.status_code, status.HTTP_200_OK)


  def test_get_active(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.get(f"{self.base_url_active}")
    self.assertEqual(response.status_code, status.HTTP_200_OK)


  def test_get_steps(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.get(f"{self.base_url_steps}")
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_get_weight(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.get(f"{self.base_url_weight}")
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_get_heart(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.get(f"{self.base_url_heart}")
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_post_active(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.post(f"{self.base_url_active}", data=self.data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

  def test_post_steps(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.post(f"{self.base_url_steps}", data=self.data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

  def test_post_heart(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.post(f"{self.base_url_heart}", data=self.data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

  def test_post_weight(self):
    self.client.force_authenticate(user=self.user)
    response = self.client.post(f"{self.base_url_weight}", data=self.data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)