# Generated by Django 4.1.3 on 2023-03-01 07:44

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("commerce", "0002_order_shippingadress_review_orderitem"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="image",
            field=cloudinary.models.CloudinaryField(
                max_length=255, null=True, unique=True, verbose_name="image"
            ),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="image",
            field=cloudinary.models.CloudinaryField(
                max_length=255, null=True, unique=True, verbose_name="image"
            ),
        ),
    ]