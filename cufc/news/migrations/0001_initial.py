# Generated by Django 3.0.3 on 2020-03-09 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('subtitle', models.CharField(blank=True, max_length=50)),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(blank=True, upload_to='images/news/')),
                ('added_on', models.DateField(auto_now_add=True)),
                ('last_updated', models.DateField(auto_now=True)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
    ]
