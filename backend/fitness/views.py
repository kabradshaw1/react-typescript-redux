from user.models import User
from .models import Active, Heart, Steps, Weight, Demo
from .serializers import ActiveSerializer, HeartSerializer, StepsSerializer, WeightSerializer, DemoSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_demo(request):
  """Retrieve the data from demo table."""
  demos = Demo.objects.all()
  serializer = DemoSerializer(demos, many=True)
  return Response(serializer.data, status=status.HTTP_200_OK)


class IsOwner(BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Only allow the owner of the object to update or delete it
        return obj.user == request.user

class ActiveViewSet(viewsets.ModelViewSet):
  """View for active energy api."""
  serializer_class = ActiveSerializer
  permission_classes = [IsAuthenticated, IsOwner]

  def get_queryset(self):
    """Retreives entries for the authenticated user."""
    user_id = self.request.user.id
    queryset = Active.objects.filter(user=user_id)
    return queryset

  def perform_create(self, serializer):
    """Creates entry for the authenticated user."""
    user_id = self.request.user.id
    serializer.save(user=user_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

class HeartViewSet(viewsets.ModelViewSet):
  """View for Heart api."""
  serializer_class = HeartSerializer
  permission_classes = [IsAuthenticated, IsOwner]

  def get_queryset(self):
    """Retreives entries for the authenticated user."""
    user_id = self.request.user.id
    queryset = Heart.objects.filter(user=user_id)
    return queryset

  def perform_create(self, serializer):
    """Creates entry for the authenticated user."""
    user_id = self.request.user.id
    serializer.save(user=user_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

class StepsViewSet(viewsets.ModelViewSet):
  """View for Steps api."""
  serializer_class = StepsSerializer
  permission_classes = [IsAuthenticated, IsOwner]

  def get_queryset(self):
    """Retreives entries for the authenticated user."""
    user_id = self.request.user.id
    queryset = Steps.objects.filter(user=user_id)
    return queryset

  def perform_create(self, serializer):
    """Creates entry for the authenticated user."""
    user_id = self.request.user.id
    serializer.save(user=user_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

class WeightViewSet(viewsets.ModelViewSet):
  """View for Weight api."""
  serializer_class = WeightSerializer
  permission_classes = [IsAuthenticated, IsOwner]

  def get_queryset(self):
    """Retreives entries for the authenticated user."""
    user_id = self.request.user.id
    queryset = Weight.objects.filter(user=user_id)
    return queryset

  def perform_create(self, serializer):
    """Creates entry for the authenticated user."""
    user_id = self.request.user.id
    serializer.save(user=user_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
