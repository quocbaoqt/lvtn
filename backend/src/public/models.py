from django.db import models
from decimal import Decimal
from django.contrib.postgres.fields import ArrayField


from django.core.validators import (
    FileExtensionValidator,
    MaxValueValidator,
    MinValueValidator,
)


# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title


zero = '0'
one = '1'
two = '2'
three = '3'

ROOMS = [
    (zero, '0'),
    (one, '1'),
    (two, '2'),
    (three, '3')
]

STUDIO = 'studio'
CANHO = 'can_ho'
# XEMAY = 'xe_may'
# OTO = 'o_to'
# DULICH = 'du_lich'
# OTHER = 'other'

APARTMENT_TYPE = [
    (STUDIO, 'Studio'),
    (CANHO, 'Căn hộ'),
]




class ApartmentLocation(models.Model):
    # apartment = models.ForeignKey(
    #     Apartment,
    #     to_field="id",
    #     db_column="apartment_id",
    #     related_name="apartment_location",
    #     on_delete=models.CASCADE,
    # )
    # V1: using textfield
    # city = models.CharField(
    #     max_length=50,
    #     choices=CITY,
    #     default=HCM,
    #     unique=True,
    # )
    # district = models.CharField(
    #     max_length=50,
    #     choices=DISTRICT,
    #     default=Q1,
    #     unique=True,
    # )
    city = models.TextField(unique=True)
    district = models.TextField(unique=True)
    address = models.TextField(unique=True)
    notes = models.TextField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ApartmentType(models.Model):
    type = models.CharField(
        max_length=50,
        choices=APARTMENT_TYPE,
        default=CANHO,
        unique=True,
    )
    # type = models.TextField(unique=True)
    description = models.TextField()

    def __str__(self):
        return self.type

class Apartment(models.Model):
    title = models.CharField(max_length=100)
    apartment_type = models.ForeignKey(
        ApartmentType,
        to_field="type",
        db_column="apartment_type",
        on_delete=models.CASCADE,
        related_name='apartment_type',
    )
    price = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[
            MinValueValidator(0.00),
            MaxValueValidator(999999999999)
        ],
    )
    status = models.TextField()
    location = models.ForeignKey(
        ApartmentLocation,
        db_column="apartment_location",
        on_delete=models.CASCADE,
        related_name='apartment_location',
    )

    # rooms 
    living_rooms = models.CharField(
        max_length=50,
        choices=ROOMS,
        default=zero,
        unique=True,
    )
    dinning_rooms = models.CharField(
        max_length=50,
        choices=ROOMS,
        default=zero,
        unique=True,
    )
    bed_rooms = models.CharField(
        max_length=50,
        choices=ROOMS,
        default=zero,
        unique=True,
    )
    bath_rooms = models.CharField(
        max_length=50,
        choices=ROOMS,
        default=zero,
        unique=True,
    )
    toilets = models.CharField(
        max_length=50,
        choices=ROOMS,
        default=zero,
        unique=True,
    )
    kitchen = models.CharField(
        max_length=50,
        choices=ROOMS,
        default=zero,
        unique=True,
    )

    furniture = ArrayField(models.CharField(max_length=100), blank=True, size=12)

    description = models.TextField(default="", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.title
class ApartmentServices (models.Model):
    title = models.CharField(max_length=100)
    apartment = models.ForeignKey(
        Apartment,
        to_field="id",
        db_column="apartment_id",
        on_delete=models.CASCADE,
        related_name='apartment_services',
    )
    cost = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        default=Decimal('0.00'),
        validators=[
            MinValueValidator(0.00),
            MaxValueValidator(999999999999)
        ],
    )

    def __str__(self):
        return self.title
class User(models.Model):
        user_name = models.CharField(max_length=64)
        email = models.EmailField(max_length=255)
        first_name = models.TextField(null=True, blank=True)
        last_name = models.TextField(null=True, blank=True)
        active = models.BooleanField(default=True)
        created_at = models.DateTimeField(
        auto_now_add=True,
        )
        updated_at = models.DateTimeField(
            auto_now_add=True,
        )

        def __str__(self):
            return '{}'.format(self.user_name)