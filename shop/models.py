from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/shop/items/", blank=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=5,decimal_places=2)
    num_left = models.PositiveIntegerField(default=0)
    adjust_price = models.DecimalField(max_digits=3,decimal_places=2, default=1.00)
    sale = models.BooleanField(default=False)
    sizes = models.CharField(max_length=50, default="XS,S,M,L,XL")
    active = models.BooleanField(default=True)
    added_on = models.DateField(auto_now_add=True)
    last_updated = models.DateField(auto_now=True)