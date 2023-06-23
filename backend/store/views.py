from django.shortcuts import get_object_or_404
from user.models import User
from .models import Item, Order, Category
from .serializers import ItemSerializer, OrderSerializer, CategorySerializer, CheckoutSerializer
from rest_framework import viewsets, status, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, permissions

# import stripe

class CategoryViewSet(viewsets.ModelViewSet):
  """View for retrieving categories."""
  http_method_names = ['get']
  serializer_class = CategorySerializer
  queryset = Category.objects.all()

class ItemViewSet(viewsets.ModelViewSet):
  """View for retrieving items."""
  http_method_names = ['get']
  queryset = Item.objects.all()
  serializer_class = ItemSerializer

  def get_object(self, queryset=None, **kwargs):
    """Get a single item by the slug."""
    slug = self.kwargs.get('pk')
    return get_object_or_404(Item, slug=slug)

  def get_queryset(self):
    """Get all items."""
    return Item.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
  """View for retrieving orders."""
  http_method_names = ['get']
  serializer_class = OrderSerializer

  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['updated']
  ordering = ['-updated']

  def get_queryset(self):
    """Will check to see if user is staff and filter non staff down to their own orders."""
    queryset = Order.objects.all()

    if not self.request.user.is_active_staff:
      user_id = self.request.user.id
      queryset = queryset.filter(user=user_id)

    return queryset


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def checkout(request):
  """Create orders."""
  serializer = CheckoutSerializer(data=request.data)

  if serializer.is_valid():
     # stripe.api_key = config('STRIPE_SECRET_KEY')
    # paid_amount = sum(item.get('cartQty') * item.get('product').price for item in serializer.validated_data['items'])

    try:
      # charge = stripe.Charge.create(
      #     amount=int(paid_amount * 100),
      #     currency='USD',
      #     description='Charge from Djackets',
      #     source=serializer.validated_data['stripe_token']
      # ), paid_amount=paid_amount

      serializer.save(user=request.user)

      return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def health_check(request):
    """Returns successful response."""
    return Response({'healthy': True})