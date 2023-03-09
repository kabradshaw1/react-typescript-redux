from django.test import TestCase
from django.contrib.auth.models import User
from .models import Item, Category, Order, OrderedItems

class Test_Create_Item(TestCase):

  @classmethod
  def setUpTestData(cls):
    test_category = Category.objects.create(name='Food')
    test_user = User.objects.create_user(username='test_user1', password='12345678')
    # in the Very Academy tutorial, he used the category_id.  I'm not currently
    # sure where he got that.
    test_item = Item.objects.create(category_id=1, name='stuff', price=2.00, image='test.jpg', description='test test test', quantity=200)
    test_order = Order.objects.create(item_id=1, username='test_user1')
    test_odrdered_items = OrderedItems.objects.create(item_id=1, order_id=1, quantity=1)
  
  def test_store_content(self):
    item = Item.objects.get(id=1) 
    order = Order.objects.get(id=1)
    category = Category.objects/get(id=1)
    item_name = f'{item.name}'
    item_price = f'{item.price}'
    item_image = f'{item.image}'
    item_description = f'{item.description}'
    item_quantity = f'{item.quantity}'
    order_username = f'{order.username}'
    self.assertEqual(item_name, 'stuff')
    self.assertEqual(item_price, 2.00)
    self.assertEqual(item_image, 'test.jpg')
    self.assertEqual(item_description, 'test test test')
    self.assertEqual(item_quantity, 200)
    self.assertEqual(order_username, 'test_user1')
    self.assertEqual(str(item), "stuff")
    self.assertEqual(str(order), 1)
    self.assertEqual(str(category), 'Food')
    
