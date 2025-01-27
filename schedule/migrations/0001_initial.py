# Generated by Django 3.0.3 on 2020-03-23 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opponent', models.CharField(max_length=50)),
                ('Location', models.CharField(max_length=50)),
                ('Date', models.DateField()),
                ('Time', models.DateTimeField()),
                ('Our_Score', models.PositiveIntegerField()),
                ('Their_Score', models.PositiveIntegerField()),
                ('Game_Type', models.CharField(max_length=50)),
            ],
        ),
    ]
