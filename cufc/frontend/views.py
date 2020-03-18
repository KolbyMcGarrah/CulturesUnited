from django.shortcuts import render

#Index view to access webpage
def index(request):
    return render(request,'frontend/index.html')