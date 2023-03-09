from django.contrib import admin
from . import models

@admin.register(models.OrderedItems)
class ItemAdmin(admin.ModelAdmin):
  list_display = ('item', 'order', 'quantity')

admin.site.register(models.Category)
