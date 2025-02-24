from django.urls import path
from .views import RegisterView, LoginView
from .views import  refresh_token, check_auth
from .views import LoginView
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView, name='login'),
    path('refresh/', refresh_token, name='refresh_token'),  # Refresh the token
    path('check-auth/', check_auth, name='check_auth'),  # Check if token is valid

]
