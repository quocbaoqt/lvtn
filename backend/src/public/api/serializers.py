from rest_framework import serializers
from public.models import Article,User,Apartment,ApartmentServices

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'



#USER serializers
class UserSerializer(serializers.ModelSerializer):
    # profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = '__all__'

class UserSerializerForList(serializers.ModelSerializer):
    # profile = UserProfileSerializer(required=True)
    class Meta:
        model = User
        fields = [
            'user_name',
            'email',
        ]


# APARTMENT serializers        

class ApartmentSerializer(serializers.ModelSerializer):
    # profile = UserProfileSerializer(required=True)

    class Meta:
        model = Apartment
        fields = '__all__'
class ApartmentSerializerForList(serializers.ModelSerializer):
    # profile = UserProfileSerializer(required=True)

    class Meta:
        model = Apartment
        fields = [
            'title',
            'apartment_type',
            'price',
            'status',
        ]
class ApartmentServicesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ApartmentServices
        fields = '__all__'
