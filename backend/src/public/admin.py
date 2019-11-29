from django.contrib import admin

# Register your models here.

from .models import Article
from .models import ApartmentServices
from .models import User
from .models import Apartment
from .models import ApartmentLocation
from .models import ApartmentType

models = [Article,Apartment,ApartmentLocation,ApartmentType,ApartmentServices]

admin.site.register(models)