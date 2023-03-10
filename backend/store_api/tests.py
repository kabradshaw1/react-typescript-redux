from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from store.models import Item, Category, Order, OrderedItems
from django.contrib.auth.models import User

class PostTests(APITestCase):
  def test_view_items(self):
    url = reverse('store_api:listcreate')
    response = self.client.get(url, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)

def create_post(self):

  self.test_category = Category.objects.create(name='django')

  self.test_user1 = Userobjects/create_user(username='test_user1', password='12345678')

  data = ["name": "new", "price": 1, "image": "text.jpg", "description": "test test test", "quantity": 1]
  url = reverse('store_api: listcreate')
  response = self.client.post(url, data, format='json)
  self.assertEqual(resonse.status_code, status.HTTP_201_CREATED)