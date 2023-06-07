from user.models import User
from .models import Active, Heart, Steps, Weight, Demo
from .serializers import ActiveSerializer, HeartSerializer, StepsSerializer, WeightSerializer, DemoSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class ActiveViewSet(viewsets.ModelViewSet):
  serializer_class = ActiveSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user_id = self.request.user.id
    queryset = Active.objects.filter(user=user_id)
    return queryset

  