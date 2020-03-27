# Generated by Django 3.0.3 on 2020-03-03 02:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coach',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('home', models.CharField(max_length=70, null=True)),
                ('title', models.CharField(max_length=50, null=True)),
                ('description', models.TextField(null=True)),
                ('image', models.ImageField(upload_to='images/coaches/')),
                ('active', models.BooleanField(default=True)),
                ('created_on', models.DateField(auto_now_add=True)),
                ('last_updated', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('home', models.CharField(max_length=70, null=True)),
                ('age', models.PositiveIntegerField(blank=True, null=True)),
                ('description', models.TextField(null=True)),
                ('position', models.CharField(max_length=50)),
                ('appearences', models.PositiveIntegerField(blank=True, null=True)),
                ('goals', models.PositiveIntegerField(default=0)),
                ('assists', models.PositiveIntegerField(default=0)),
                ('image', models.ImageField(upload_to='images/players/')),
                ('active', models.BooleanField(default=True)),
                ('created_on', models.DateField(auto_now_add=True)),
                ('last_updated', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('home', models.CharField(max_length=70, null=True)),
                ('description', models.TextField(null=True)),
                ('title', models.CharField(max_length=50, null=True)),
                ('image', models.ImageField(upload_to='images/staff/')),
                ('active', models.BooleanField(default=True)),
                ('created_on', models.DateField(auto_now_add=True)),
                ('last_updated', models.DateField(auto_now=True)),
            ],
        ),
    ]