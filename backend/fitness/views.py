from user.models import User
from .models import Active, Heart, Steps, Weight, Demo
from .serializers import ActiveSerializer, HeartSerializer, StepsSerializer, WeightSerializer, DemoSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission


class IsOwner(BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Only allow the owner of the object to update or delete it
        return obj.user == request.user

class ActiveViewSet(viewsets.ModelViewSet):
  serializer_class = ActiveSerializer
  permission_classes = [IsAuthenticated, IsOwner]

  def get_queryset(self):
    user_id = self.request.user.id
    queryset = Active.objects.filter(user=user_id)
    return queryset

  def perform_create(self, serializer):
    user_id = self.request.user.id
    serializer.save(user=user_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

