from django.urls import path
from .views import RegisterView, LoginView
from .views import  refresh_token_view, check_auth
from .views import LoginView
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView, name='login'),
    path('refresh/', refresh_token_view, name='refresh_token_view'),  # Refresh the token
    path('check-auth/', check_auth, name='check_auth'),  # Check if token is valid

]
