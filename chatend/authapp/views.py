from django.shortcuts import render

from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer, TokenSerializer
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.middleware.csrf import get_token
import json
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

User = get_user_model()

# Register View
class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login View
@api_view(["POST"])  # Ensures it's a proper API view
def LoginView(request):
    try:
        data = json.loads(request.body)  # Load JSON data
        username = data.get("username")
        password = data.get("password")
    except json.JSONDecodeError:
        return Response({"error": "Invalid JSON format"}, status=400)

    user = authenticate(username=username, password=password)

    if user:
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        # Return tokens in response body (no CSRF token)
        return Response({
            "message": "Login successful",
            "access_token": access_token,
            "refresh_token": str(refresh)  # Send refresh token
        })

    return Response({"error": "Invalid credentials"}, status=400)
# Refresh Token View
@api_view(['POST'])
def refresh_token(request):
    try:
        # Get refresh token from request body instead of cookies
        refresh_token = request.data.get('refresh_token')

        if not refresh_token:
            return Response({"error": "No refresh token provided"}, status=401)

        refresh = RefreshToken(refresh_token)  # Decode the refresh token
        new_access_token = str(refresh.access_token)
        new_refresh_token = str(RefreshToken.for_user(refresh.user))  # Generate new refresh token

        return Response({
            "message": "Token refreshed successfully",
            "access_token": new_access_token,
            "refresh_token": new_refresh_token  # Removed csrf_token from response
        })

    except Exception:
        return Response({"error": "Invalid or expired refresh token"}, status=401)

@api_view(["GET"])
def check_auth(request):
    if request.user.is_authenticated:
        return Response({"message": "User is authenticated", "user": request.user.username})
    return Response({"error": "User not authenticated"}, status=401)