from django.urls import path
from .views import incident_list, update_incident_status

urlpatterns = [
    path('incidents/', incident_list, name='incident-list'),

    path(
        'incidents/<int:pk>/',
        update_incident_status,
        name='update-incident-status'
    ),
]