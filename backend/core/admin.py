from django.contrib import admin
from .category.models import Category
from .item.models import Item
from .order.models import Order
from .user.models import User

admin.site.register(Item)
admin.site.register(Order)
admin.site.register(User)
admin.site.register(Category)