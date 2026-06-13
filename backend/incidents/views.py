from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Incident
from .serializers import IncidentSerializer


@api_view(['GET', 'POST'])
def incident_list(request):

    if request.method == 'GET':
        incidents = Incident.objects.all()
        serializer = IncidentSerializer(incidents, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = IncidentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def update_incident_status(request, pk):

    try:
        incident = Incident.objects.get(pk=pk)
    except Incident.DoesNotExist:
        return Response(
            {"error": "Incident not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    incident.status = request.data.get("status", incident.status)
    incident.save()

    serializer = IncidentSerializer(incident)
    return Response(serializer.data)