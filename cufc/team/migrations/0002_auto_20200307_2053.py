# Generated by Django 3.0.3 on 2020-03-07 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='appearences',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
