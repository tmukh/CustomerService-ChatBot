from rest_framework import serializers
from .models import ChatMessage

class questionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'
#       If needed to convert all fields
