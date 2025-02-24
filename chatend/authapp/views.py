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
def refresh_token_view(request):
    refresh_token = request.data.get("refresh")
    
    if refresh_token:
        try:
            # Verifying the provided refresh token and creating a new refresh and access token
            refresh = RefreshToken(refresh_token)

            # Create new access and refresh tokens
            new_access_token = str(refresh.access_token)
            new_refresh_token = str(refresh)

            # Return both tokens
            return Response({
                "access": new_access_token,
                "refresh": new_refresh_token
            }, status=status.HTTP_200_OK)
        
        except Exception:
            return Response({"error": "Invalid refresh token"}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"error": "Refresh token required"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def check_auth(request):
    try:
        # Verifying the access token using JWTAuthentication
        JWTAuthentication().authenticate(request)
        return Response({"message": "User is authenticated", "user": request.user.username})
    except Exception:
        return Response({"error": "User not authenticated"}, status=401)
