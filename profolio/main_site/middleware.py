from django.http import HttpResponseForbidden
from django.template import loader


basicContext = {
    "favicon": 'https://main553.b-cdn.net/ico-removebg-preview.png'
}


class RestrictAdminIPMiddleware:
    ALLOWED_IPS = ['67.189.13.190', '127.0.0.1']  # Replace with actual IPs '127.0.0.1'

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/nobichwaynig_yeskangshite/') and request.META['REMOTE_ADDR'] not in self.ALLOWED_IPS:
            template = loader.get_template('index.html')  # Update the path accordingly
            return HttpResponseForbidden(template.render())
        return self.get_response(request)