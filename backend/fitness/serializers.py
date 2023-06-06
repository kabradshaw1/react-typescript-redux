from rest_framework import serializers
from .models import Active, Heart, Steps, Weight, Demo

class ActiveSerializer(serializers.ModelSerializer):
  class Meta:
    model = Active
    fields = '__all__'

class HeartSerializer(serializers.ModelSerializer):
  class Meta:
    model = Heart
    fields = '__all__'

class StepsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Steps
    fields = '__all__'

class WeightSerializer(serializers.ModelSerializer):
  class Meta:
    model = Weight
    fields = '__all__'

class DemoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Demo
    fields = '__all__'